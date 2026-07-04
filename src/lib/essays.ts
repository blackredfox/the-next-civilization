export type EssaySection = {
  heading?: string;
  paragraphs: Array<string>;
};

export type EssayFurtherReading = {
  label: string;
  url: string;
};

export type Essay = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  series: string;
  status: "Published";
  author: string;
  publication: string;
  date: string;
  homepageSummary: string;
  sections: Array<EssaySection>;
  furtherReading: Array<EssayFurtherReading>;
};

export const aiFutureWallOfWorkEssay: Essay = {
  slug: "ai-future-wall-of-work",
  title: "The AI Future Has Hit the Wall of Work",
  subtitle:
    "The first forecasts were about replacement. The first implementation is revealing something more complicated.",
  description:
    "The first AI forecasts were about replacing work. The first real implementations are showing something more complicated: AI is not entering a world of tasks, but a human world of work, responsibility, identity, and physical reality.",
  category: "Essay",
  series: "Volume I — The AI Transition",
  status: "Published",
  author: "Natasha Urazovskaya",
  publication: "The Next Civilization",
  date: "2026-07-04",
  homepageSummary:
    "AI is not entering a world of tasks. It is entering a world of people, companies, physical work, responsibility, and the human need to be needed.",
  sections: [
    {
      paragraphs: [
        "Every technological era first speaks the language of its builders.",
        "The steam engine spoke the language of force. Electricity spoke the language of power and distribution. The computer spoke the language of automation. The internet spoke the language of connection.",
        "AI began by speaking the language of intelligence.",
        "Models, tokens, inference, agents, benchmarks, scaling, productivity, automation, AGI, ASI.",
        "But every technological era eventually reaches a point when the language of its creators is no longer enough. The technology leaves the labs, the presentations, the podcasts, and the strategic documents. It enters the lives of people who did not build it, did not choose its speed, and may not know what role they have been assigned in the new world.",
        "Every time I hear another prediction that AI will replace people, I want to stop the conversation on one word.",
        "People.",
        "Which people?",
        "Not “workers” as a category in a report. Not “labor” as a line item. Not “headcount” as a measure of efficiency. Real people: the junior developer who just entered the profession and now hears that coding agents can do more and more of the work; the office employee who spent ten years building a career around accuracy, experience, and knowledge of internal processes; the customer service worker whose company asks them to learn AI tools faster but does not explain what will happen to the role in two years; the technician who does not participate in the AI debate at all, but may one day discover that dispatch, diagnostics, reports, and scheduling are already being shaped by a new system; the student choosing a major and wondering whether the profession will become unstable before graduation.",
        "The public conversation about AI often speaks about work as an abstraction: jobs, tasks, productivity, automation, workforce, efficiency.",
        "But people do not live inside abstractions.",
        "They live inside professions, families, bills, status, exhaustion, ambition, habit, fear, and the hope of being useful.",
        "This is where the first misunderstanding of the AI era begins.",
        "We talk about the future of work as if work were a set of tasks.",
        "But work is not only a task.",
        "Work is human life embedded in the economy.",
      ],
    },
    {
      heading: "The wave began from above",
      paragraphs: [
        "The first major forecasts about AI moved from the top down.",
        "From labs, big tech, venture capital, futurist podcasts, government discussions, research papers, and presentations about productivity, agents, AGI, automation, post-work society, and universal income.",
        "Inside the AI world, this conversation makes sense.",
        "There is a great deal to discuss.",
        "Models are becoming more capable. Inference is being optimized. Quantization, distillation, better hardware utilization, and model compression promise to reduce the cost of AI systems. Agents are beginning to perform longer chains of tasks. Coding tools such as Codex are changing how software work may be done. Distributed compute and AI ownership raise a deeper question: if intelligence becomes a productive force, who will own it?",
        "This is a serious conversation.",
        "And many people inside it are doing real, difficult, historically important work: scientists, engineers, researchers, product leaders, infrastructure teams, founders, investors, and futurists. They are not merely imagining the future. They are already taking practical steps toward it.",
        "But that is exactly why one thing needs to be named.",
        "The AI world is no longer only creating tools.",
        "It is creating assumptions about civilization.",
        "Assumptions about what work is. Assumptions about what intelligence is worth. Assumptions about which human skills will matter. Assumptions about how companies should be organized. Assumptions about whether people need work, what happens to income, how education should change, who owns productive capacity, and what it means for a person to remain useful.",
        "Those assumptions become products.",
        "The products become infrastructure.",
        "And infrastructure, once it enters daily life deeply enough, becomes civilization.",
        "No one formally elected the AI world to design the future of work, education, ownership, and human self-realization. But more and more decisions that will shape that future are being made there: in labs, big tech companies, startups, venture funds, AI policy discussions, corporate strategy rooms, and infrastructure projects.",
        "That is not necessarily wrong.",
        "But it should make us more honest about the scale of the responsibility.",
        "Because the AI transition is no longer only a question of technology.",
        "It is a question of how society will reorganize work, income, meaning, status, skills, and the human need to be needed.",
      ],
    },
    {
      heading: "I would call it the AI observation bubble",
      paragraphs: [
        "People often call this the AI bubble.",
        "I understand why.",
        "But I would define it more precisely: the AI observation bubble.",
        "Not a bubble in the sense that “they understand nothing.” Not a bubble in the sense that the people inside it are bad, greedy, or detached from life.",
        "No.",
        "Inside this bubble are many serious and brilliant people. Often they are doing some of the most important technical work of our time.",
        "The issue is not intention.",
        "The issue is perspective.",
        "Every deep professional environment creates its own field of vision, its own language, its own map of reality, and its own central questions.",
        "If someone thinks every day about models, tokens, inference, agents, benchmarks, scaling laws, safety, quantization, and compute, they begin to see the world through those categories.",
        "Work begins to look like a set of tasks.",
        "A company begins to look like a system of processes.",
        "A profession begins to look like a bundle of skills.",
        "A person begins to look like a carrier of functions.",
        "The future begins to look like a curve of capabilities.",
        "This view is not necessarily false.",
        "But it is incomplete.",
        "From inside the AI observation bubble, it is easy to see what is becoming possible.",
        "From outside it, something else becomes visible: how difficult possibility becomes when it has to enter reality.",
      ],
    },
    {
      heading: "Then the wave passes through the interpreters",
      paragraphs: [
        "Between the AI observation bubble and ordinary society stands another layer: the layer of public authorities and interpreters.",
        "Not only bloggers.",
        "Technology leaders, CEOs, founders, investors, futurists, podcasters, journalists, YouTube creators, LinkedIn influencers, TikTok explainers, media personalities, and public intellectuals.",
        "They translate the complex AI transition into a public expectation of the future.",
        "Sometimes they do useful work. They explain new technologies in plain language, demonstrate tools, and help people avoid falling behind.",
        "But this layer has its own logic.",
        "It lives not only by truth, but by attention.",
        "And attention does not usually reward the most precise idea.",
        "It rewards the strongest one.",
        "The most alarming one.",
        "The simplest one.",
        "Not: some tasks inside professions will be automated, some will be augmented, some will be revalued, and some professions will change their structure.",
        "But: AI will take your job.",
        "This profession will disappear.",
        "You have five years left.",
        "Learn immediately before it is too late.",
        "And this does not come only from bloggers.",
        "When a random YouTube creator says AI will replace everyone, a person may dismiss it as hype. But when similar ideas come from someone like Elon Musk, the effect is different.",
        "For many people, Musk is not merely an entrepreneur. He is a symbol of technological futurity: Tesla, SpaceX, Starlink, xAI. His words are often received not as ordinary opinion, but almost as a signal from someone who may see the next stage earlier than others.",
        "So when he says that work may become optional in the future, or writes on X that “Universal HIGH INCOME” through government checks is the best way to deal with unemployment caused by AI, an ordinary person does not hear only a futurist hypothesis. They hear a warning.",
        "And then a very human question appears.",
        "If people of that scale say there may be no work, what is an ordinary worker supposed to think?",
        "What is a student choosing a career supposed to think?",
        "What is an office worker supposed to think when their company is already buying AI tools?",
        "What is a parent supposed to think when they hear that work may be radically transformed in five to ten years?",
        "Five years is not a distant future.",
        "It is almost tomorrow.",
        "One child’s path to middle school. One mortgage cycle. One career pivot. One attempt to retrain.",
        "If the message from above is that work may disappear, but there is no clear answer from below about how a person should live through the transition, anxiety is not weakness.",
        "It is a rational response to uncertainty.",
      ],
    },
    {
      heading: "People are not simply afraid. They are reading signals.",
      paragraphs: [
        "It is important not to describe this too crudely.",
        "We should not say that the entire middle layer of society is “afraid.”",
        "That is not true.",
        "Some people are anxious. Some are adapting. Some are ignoring it. Some are learning. Some already use AI and feel more powerful. Some think this is another bubble. Some panic. Some quietly look at job postings, courses, and new skills, trying to decide where to move next.",
        "But this layer is already reading the signals.",
        "These are white-collar workers and knowledge workers: office employees, analysts, junior developers, customer service representatives, finance operations teams, HR, marketing, designers, writers, administrative roles, project coordinators, and people whose work lives inside documents, emails, spreadsheets, tickets, dashboards, code, reports, and internal systems.",
        "They are not inside the AI bubble.",
        "But they have already become subjects of the AI transition.",
        "They do not hear AI as “scalable intelligence.”",
        "They hear it as a question about their future usefulness.",
        "What will happen to my profession? How do I remain needed? Which skills still matter? Do I need to change careers? Can I compete with someone who uses AI better than I do? Will my employer see me as less valuable if a machine can now perform part of my work?",
        "Pew Research Center data captures this mixed state well. In 2025, 52 percent of U.S. workers said they were worried about the future impact of AI in the workplace. But 36 percent also said they felt hopeful, 33 percent overwhelmed, and 29 percent excited. This is not a picture of simple panic. It is a picture of uncertainty.",
        "And that uncertainty is not fed only by headlines.",
        "It is fed by real signals from companies.",
        "In 2025, Amazon CEO Andy Jassy told employees that generative AI and agents would likely reduce the company’s total corporate workforce over the next few years as AI produced efficiency gains and changed how work is done.",
        "Meta has become an even more revealing case. Reuters reported in July 2026 that Mark Zuckerberg acknowledged AI agent technology had progressed more slowly than expected; the restructuring had not been as clean as hoped; executives had miscalculated timing; Meta had laid off about 10 percent of its global workforce and reassigned roughly 7,000 employees to AI-focused teams.",
        "For the AI industry, this may be workforce transformation.",
        "For a company, restructuring.",
        "For investors, capital allocation.",
        "For a worker, it is a signal: my work is entering the zone of reconsideration.",
        "That is why we should not reduce people’s response to “fear.”",
        "They are not simply afraid.",
        "They are trying to understand what is happening, because the first signals have already entered their lives.",
      ],
    },
    {
      heading: "Then the wave hit the wall of work",
      paragraphs: [
        "This is where the story becomes more interesting.",
        "The early public forecasts about AI often sounded like a story of replacement.",
        "AI will become smarter. AI will become cheaper. AI will work 24/7. AI does not get tired. AI does not take sick leave. AI does not go on maternity leave. AI does not argue with a manager. AI does not ask for a raise. AI can be scaled. AI will do the work of people.",
        "For business, that logic can sound attractive. Not necessarily out of greed. Simply because if labor is perceived as cost plus friction, AI begins to look like control plus scale.",
        "But the first implementations are already revealing a more complicated picture.",
        "Companies do not simply press a button and replace people with machines as cleanly as it looked in presentations.",
        "They encounter unready workflows, poor data, legal risks, model errors, employee resistance, morale problems, the continuing need for human review, the loss of tacit knowledge, unpredictable costs, integration problems, and unclear responsibility.",
        "This is where the return wave begins.",
        "At first, the AI forecast moved from the top down: from labs, founders, investors, futurists, CEOs, and governments into companies, and then into workers’ lives.",
        "Now AI has begun to collide with real work.",
        "And from that collision, different signals are moving upward.",
        "Not: AI has failed.",
        "No.",
        "AI has not failed.",
        "If anything, it has become serious enough to meet reality.",
        "But reality is saying something else: the transition will be less clean, less automatic, and far more human than many forecasts implied.",
      ],
    },
    {
      heading:
        "The early rhetoric was about replacement. The first implementation is revealing reconstruction.",
      paragraphs: [
        "When a technology is still mostly a forecast, it is easy to describe it in clean words.",
        "Automation.",
        "Replacement.",
        "Productivity.",
        "Post-work.",
        "Universal income.",
        "AI agents.",
        "But when the technology enters an organization, the clean language disappears.",
        "People appear.",
        "Processes appear.",
        "Exceptions appear.",
        "Responsibility appears.",
        "Who checks the output?",
        "Who is accountable if AI is wrong?",
        "Who explains the decision to a customer?",
        "Who knows when the formal instruction does not match the real process?",
        "Who notices that the data is incomplete?",
        "Who preserves trust?",
        "Who sees that a system may be correct according to the rules and wrong according to the situation?",
        "This is why people closer to operational implementation often begin to speak differently from the large futurist forecasts.",
        "Not: AI will replace people.",
        "But: AI will change the workday.",
        "Not: the human disappears.",
        "But: the human will work with agents, verify results, set direction, design processes, and carry responsibility.",
        "It is revealing that the conversation around products such as ChatGPT and Codex increasingly sounds less like a simple story of replacement and more like a conversation about workflow, agents, responsibility, and product design. WIRED reported that Thibault Sottiaux, a key leader behind Codex, now oversees core products including ChatGPT and Codex, and is involved in turning ChatGPT into a more agentic “super app.”",
        "This kind of person matters in the story.",
        "Not only the great prophets of the future, but the people inside the operational process.",
        "The people who see AI not as an abstract wave, but as a system that must be inserted into human work.",
        "The people who encounter not only possibility, but implementation.",
        "That is where the new rhetoric seems to begin.",
        "The early rhetoric was about replacement.",
        "The first implementation is revealing reconstruction.",
      ],
    },
    {
      heading: "No one knows the whole path yet",
      paragraphs: [
        "We should be honest here.",
        "I do not think anyone fully understands how society will pass through the AI transition.",
        "Not technology leaders.",
        "Not politicians.",
        "Not economists.",
        "Not workers.",
        "Not journalists.",
        "Not writers of essays like this one.",
        "So the goal is not to replace one forecast with another.",
        "The goal is to widen the field of observation.",
        "From inside the AI observation bubble, one picture is visible: acceleration, model capability, inference cost, quantization, agents, scaling, distributed compute, post-work scenarios, and new ownership models.",
        "That picture matters.",
        "But it is not the only one.",
        "From outside the bubble, other signals arrive: corporate caution, worker uncertainty, unready processes, resistance, human review, legal risk, morale problems, implementation delays, errors, and the continuing need for human responsibility.",
        "Authority in building a technology does not mean that one person, one company, or one industry can fully predict how society will adapt to that technology.",
        "The people creating AI see the trajectory of capability.",
        "But the trajectory of implementation becomes visible only when the technology collides with organizations, workers, habits, processes, fears, regulation, physical labor, and the real economy.",
        "That is why the AI conversation has to become wider.",
        "Not because the technological layer is wrong.",
        "But because it does not see everything.",
      ],
    },
    {
      heading: "There is also a vast layer outside the AI conversation",
      paragraphs: [
        "There is another layer we easily forget.",
        "People who barely participate in the AI discourse at all.",
        "Not necessarily poor. Not necessarily uneducated. Not necessarily blue-collar.",
        "Sometimes it is someone with a large house, a comfortable life, and zero interest in AI. Sometimes it is a technician, driver, construction worker, nurse, mechanic, warehouse worker, small business owner, hospitality worker, caregiver, or service worker. Sometimes it is a person who comes home after a long shift and has neither the time nor the reason to follow what is happening inside AI labs.",
        "Not because they are unintelligent.",
        "Because their life is organized around other demands.",
        "They do not read arXiv. They do not listen to podcasts about AGI. They do not follow OpenAI product strategy. They do not know what quantization is. They do not argue about distributed AI capital.",
        "But that does not mean the AI transition will not reach them.",
        "It may reach them through a scheduling system, dispatch, a hiring filter, an insurance process, warehouse management, route optimization, monitoring, diagnostics, customer service automation, robotics, pricing, productivity tracking, or a service platform that begins to manage their work differently.",
        "Pew Research Center found in 2023 that jobs with higher exposure to AI were more often associated with college-educated and higher-paid workers, which helps explain why white-collar workers felt generative AI first.",
        "But that does not mean physical work will remain outside the AI transition.",
        "It may enter later.",
        "Differently.",
        "And perhaps more deeply.",
      ],
    },
    {
      heading: "Blue-collar work is the real wall of work",
      paragraphs: [
        "The first wave of generative AI became visible through office work: text, code, reports, customer support, marketing, documents, presentations, analysis, and junior knowledge work.",
        "But civilization is not held together only by offices.",
        "It is held together by people who repair, drive, build, clean, assemble, care, deliver, connect, inspect, maintain, heal, and support the material side of society.",
        "This is one of the most important future tests of AI.",
        "As long as AI changes text and code, it changes the visible surface of the knowledge economy.",
        "But when AI connects with robotics, diagnostics, logistics, scheduling, field operations, maintenance, warehouse systems, construction tools, healthcare workflows, and service platforms, it will enter the material economy.",
        "That is where we will see whether AI can do more than automate information.",
        "That is where we will see whether it can reorganize production, service, and physical work.",
        "Brookings has argued that generative AI by itself is less likely to disrupt physical, routine, blue-collar work without breakthroughs in robotics. But that is precisely the point: the next stage will not be only about text models. It will be about connecting AI to robots, workflows, and physical systems.",
        "McKinsey Global Institute describes the future of work less as simple replacement and more as a partnership among people, agents, and robots, in which machines handle routine tasks while people frame problems, guide AI agents and robots, interpret results, and make decisions.",
        "That is the language of reconstruction, not the disappearance of the human.",
        "But blue-collar and physical work will be the real wall against which the AI forecast ultimately hits.",
        "Because there, a beautiful demo is not enough.",
        "There, the system has to work in physical reality.",
        "The shipment has to arrive. The patient has to be cared for. The vehicle has to be repaired. The house has to be built. The warehouse has to function. The service cannot stop. The error cannot become an injury, an accident, a lost customer, or a broken supply chain.",
        "White-collar work is where AI disruption became visible first.",
        "Blue-collar and physical work are where AI will have to prove whether it can reorganize the real economy.",
      ],
    },
    {
      heading: "Work is not only output",
      paragraphs: [
        "This is why the old comparison between AI and human labor is too narrow.",
        "A model can perform a task.",
        "But work is not only task completion.",
        "Work is income, meaning, status, profession, competence, routine, social role, proof of usefulness, a way to be needed, and a way to participate in society.",
        "When the AI world speaks about lowering the cost of intelligence operations, it is speaking about something real and important.",
        "When business speaks about lowering the cost of labor, it is also speaking about something real.",
        "But they are not the same thing.",
        "Lowering the cost of machine intelligence does not automatically lower the cost of human work.",
        "Human work includes not only output, but context, adaptation, responsibility, communication, judgment, trust, professional identity, and consequences.",
        "A model can produce an answer.",
        "But who is responsible for whether that answer is used correctly?",
        "Who understands when a situation is an exception?",
        "Who knows that the formal instruction does not match the real process?",
        "Who preserves the trust of a customer?",
        "Who notices that the data is incomplete?",
        "Who explains a decision to a living person?",
        "Who carries responsibility if the decision causes harm?",
        "These questions do not disappear when the model becomes smarter.",
        "Sometimes they become more important.",
      ],
    },
    {
      heading: "The wave is returning",
      paragraphs: [
        "The wave of the AI future is now returning.",
        "It went downward as a forecast.",
        "It comes back upward as a signal from implementation.",
        "From above came: replacement.",
        "From below comes: restructuring.",
        "From above came: productivity.",
        "From below comes: workflow.",
        "From above came: automation.",
        "From below comes: responsibility.",
        "From above came: post-work.",
        "From below comes: transition.",
        "From above came: intelligence is becoming scalable.",
        "From below comes: human work is not only intelligence.",
        "This is where the serious conversation begins.",
        "Not whether society will stop AI.",
        "It will not.",
        "Not whether AI will change work.",
        "It will.",
        "The question is different.",
        "Can we pass through this transition in a way that makes AI an amplifier of civilization, rather than a force that destroys old forms of work faster than society can create new ones?",
        "The wave of the AI future has already hit the wall of work.",
        "And from that wall, a signal is coming back.",
        "It does not say: AI will not work.",
        "It says: you cannot understand the future of work by looking only from inside the AI room.",
        "AI is not entering a world of tasks.",
        "It is entering a world of people.",
        "A world of companies, professions, physical work, families, status, responsibility, meaning, and the human need to be needed.",
        "If we want to speak about AI seriously, we should not begin only with the question:",
        "What will AI be able to do?",
        "We should begin with another:",
        "How will people live inside this transition?",
        "Because work is not only a task to be completed.",
        "Work is part of human life.",
        "And that is the wall the AI future has now hit.",
      ],
    },
  ],
  furtherReading: [
    {
      label:
        "Pew Research Center — U.S. Workers Are More Worried Than Hopeful About Future AI Use in the Workplace.",
      url: "https://www.pewresearch.org/social-trends/2025/02/25/u-s-workers-are-more-worried-than-hopeful-about-future-ai-use-in-the-workplace/",
    },
    {
      label: "Pew Research Center — Workers’ Views of AI Use in the Workplace.",
      url: "https://www.pewresearch.org/social-trends/2025/02/25/workers-views-of-ai-use-in-the-workplace/",
    },
    {
      label:
        "Pew Research Center — Which U.S. Workers Are More Exposed to AI on Their Jobs?",
      url: "https://www.pewresearch.org/social-trends/2023/07/26/which-u-s-workers-are-more-exposed-to-ai-on-their-jobs/",
    },
    {
      label: "Amazon — Update from Amazon CEO Andy Jassy on Generative AI.",
      url: "https://www.aboutamazon.com/news/company-news/amazon-ceo-andy-jassy-on-generative-ai",
    },
    {
      label:
        "Reuters — Amazon’s corporate workforce may shrink as AI takes over some tasks.",
      url: "https://www.reuters.com/business/retail-consumer/amazons-workforce-reduce-rollout-generative-ai-agents-2025-06-17/",
    },
    {
      label:
        "Reuters — Meta’s Zuckerberg says AI agent tech progressing slower than expected.",
      url: "https://www.reuters.com/business/zuckerberg-says-ai-agent-development-going-slower-than-expected-2026-07-02/",
    },
    {
      label:
        "Elon Musk / X — “Universal HIGH INCOME” post on AI-driven unemployment.",
      url: "https://x.com/elonmusk/status/2044990537145753894",
    },
    {
      label:
        "WIRED — Meet the OpenAI Engineer Leading ChatGPT’s Biggest Transformation Yet.",
      url: "https://www.wired.com/story/model-behavior-interview-with-openai-codex-lead-tibo-sottiaux",
    },
    {
      label:
        "Brookings — Generative AI, the American Worker, and the Future of Work.",
      url: "https://www.brookings.edu/articles/generative-ai-the-american-worker-and-the-future-of-work/",
    },
    {
      label:
        "McKinsey Global Institute — People, Agents, and Robots: Skill Partnerships in the Age of AI.",
      url: "https://www.mckinsey.com/mgi/our-research/agents-robots-and-us-skill-partnerships-in-the-age-of-ai",
    },
  ],
};

export const publishedEssays = [aiFutureWallOfWorkEssay];

export function getEssayPath(essay: Essay) {
  return `/essays/${essay.slug}`;
}

export function getEssayReadingTime(essay: Essay) {
  const words = getEssayText(essay).match(/\S+/g)?.length ?? 0;
  const minutes = Math.max(1, Math.ceil(words / 225));
  return `${minutes} min read`;
}

export function formatEssayDate(essay: Essay) {
  const [year, month, day] = essay.date.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

function getEssayText(essay: Essay) {
  return [
    essay.title,
    essay.subtitle,
    essay.description,
    ...essay.sections.flatMap((section) => [
      section.heading ?? "",
      ...section.paragraphs,
    ]),
    "Further Reading",
    ...essay.furtherReading.map((item) => item.label),
  ].join(" ");
}
