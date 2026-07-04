import { useId, useState, type FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

type NewsletterSignupFormProps = {
  source: "homepage" | "newsletter-page";
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterSignupForm({ source }: NewsletterSignupFormProps) {
  const generatedId = useId();
  const inputId = `newsletter-email-${generatedId}`;
  const messageId = `newsletter-message-${generatedId}`;
  const [email, setEmail] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedEmail = email.trim().toLowerCase();

    if (!emailPattern.test(normalizedEmail)) {
      setFormState("error");
      setMessage("Enter a valid email address.");
      return;
    }

    setFormState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: normalizedEmail, source }),
      });

      const body = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(body?.message ?? "Subscription failed. Please try again.");
      }

      setFormState("success");
      setEmail("");
      setMessage("You're subscribed. Welcome to The Next Civilization.");
    } catch (error) {
      setFormState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Subscription failed. Please try again.",
      );
    }
  }

  const isSubmitting = formState === "submitting";

  return (
    <div className="mt-14">
      <form
        className="flex flex-col sm:flex-row border border-rule bg-background"
        onSubmit={handleSubmit}
      >
        <label htmlFor={inputId} className="sr-only">
          Email address
        </label>
        <input
          id={inputId}
          type="email"
          required
          autoComplete="email"
          placeholder="your@email.com"
          value={email}
          disabled={isSubmitting}
          aria-describedby={message ? messageId : undefined}
          onChange={(event) => setEmail(event.target.value)}
          className="flex-1 bg-transparent px-6 py-5 text-[15px] placeholder:text-ink-soft/60 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-ink text-paper px-8 py-5 text-[14px] tracking-wide hover:bg-ink-soft transition-colors disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {message && (
        <p
          id={messageId}
          role={formState === "error" ? "alert" : "status"}
          className={`mt-4 text-[13px] ${
            formState === "error" ? "text-red-700" : "text-ink-soft"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
