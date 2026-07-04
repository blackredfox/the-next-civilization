import { createFileRoute } from "@tanstack/react-router";

type SubscribeBody = {
  email?: unknown;
  source?: unknown;
};

type LoopsResponse = {
  success?: boolean;
  message?: string;
};

const loopsContactUpdateUrl = "https://app.loops.so/api/v1/contacts/update";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedSources = new Set(["homepage", "newsletter-page"]);

export const Route = createFileRoute("/api/subscribe")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.LOOPS_API_KEY;

        if (!apiKey) {
          console.error("LOOPS_API_KEY is not configured.");
          return json({ message: "Newsletter signup is temporarily unavailable." }, 503);
        }

        let body: SubscribeBody;

        try {
          body = (await request.json()) as SubscribeBody;
        } catch {
          return json({ message: "Invalid request body." }, 400);
        }

        const email =
          typeof body.email === "string" ? body.email.trim().toLowerCase() : "";

        if (!emailPattern.test(email)) {
          return json({ message: "Enter a valid email address." }, 400);
        }

        const source =
          typeof body.source === "string" && allowedSources.has(body.source)
            ? body.source
            : "unknown";

        const loopsBody: Record<string, unknown> = {
          email,
          source: `thenextcivilization.ai:${source}`,
        };

        const mailingListId = process.env.LOOPS_MAILING_LIST_ID;
        if (mailingListId) {
          loopsBody.mailingLists = {
            [mailingListId]: true,
          };
        }

        let loopsResponse: Response;

        try {
          loopsResponse = await fetch(loopsContactUpdateUrl, {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${apiKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loopsBody),
          });
        } catch (error) {
          console.error("Loops subscription request failed.", error);
          return json({ message: "Subscription failed. Please try again." }, 502);
        }

        const loopsResult = (await loopsResponse.json().catch(() => null)) as
          | LoopsResponse
          | null;

        if (!loopsResponse.ok || loopsResult?.success === false) {
          console.error("Loops subscription response was not successful.", {
            status: loopsResponse.status,
            message: loopsResult?.message,
          });

          return json({ message: "Subscription failed. Please try again." }, 502);
        }

        return json({ success: true });
      },
    },
  },
});

function json(body: Record<string, unknown>, status = 200) {
  return Response.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
