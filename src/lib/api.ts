import type { SiteData } from './types'

export const SYSTEM_PROMPT = `You are an elite SaaS copywriter and landing page architect.
Your task is to generate high-converting, professional copy for a landing page based on the user's prompt.
You must output a strictly formatted JSON object that perfectly matches the following TypeScript interface 'SiteData'.
Do not include any other text or markdown formatting outside the JSON object.

interface SiteData {
  hero: {
    headline: string;
    subheadline: string;
    ctaText: string;
  };
  problem: {
    statement: string;
    painPoints: string[]; // Exactly 3 pain points
  };
  solution: {
    sectionTitle: string;
    features: { title: string; description: string; }[]; // Exactly 3 features
  };
  testimonial: {
    sectionTitle: string;
    testimonials: { quote: string; name: string; handle: string; }[]; // Between 4 and 6 testimonials
  };
  cta: {
    headline: string;
    subheadline: string;
    buttonText: string;
  };
}
`;

export const mockSiteData: SiteData = {
  hero: {
    headline: "Build Faster.\nBreak Nothing.",
    subheadline: "The unbreakable design system and architecture for generating polymorphic React applications. Stop fighting your frontend.",
    ctaText: "Start Building"
  },
  problem: {
    statement: "Most software teams are paralyzed by repetitive setup, fragmented design systems, and sluggish build times.",
    painPoints: [
      "Weeks spent writing boilerplate code instead of shipping features.",
      "Fragmented UI components that break brand guidelines and user trust.",
      "Bloated applications that drain battery and frustrate users."
    ]
  },
  solution: {
    sectionTitle: "The Solution",
    features: [
      {
        title: "The Component Vault",
        description: "Stop reinventing the wheel. Access a curated library of battle-tested, highly animated UI blocks that snap together perfectly."
      },
      {
        title: "Semantic Tokens",
        description: "Powered entirely by HSL variables. Swap the theme instantly without touching a single component class."
      },
      {
        title: "JSON-to-UI",
        description: "Feed the engine a strict JSON blueprint, and it automatically renders a fully functional, animated layout."
      }
    ]
  },
  testimonial: {
    sectionTitle: "Loved by Developers",
    testimonials: [
      {
        name: "Alex Jensen",
        handle: "@alexjcodes",
        quote: "The engine is an absolute game-changer. I spun up a highly animated, polymorphic site in a weekend. The HSL token system is flawless."
      },
      {
        name: "Sarah Lin",
        handle: "@sarah_designs",
        quote: "Finally, a React template that doesn't just look good, but feels physical. The 'Industrial Pop' aesthetic is incredibly premium."
      },
      {
        name: "Marcus Thorne",
        handle: "@mthorne",
        quote: "I've tried a lot of boilerplates, but the strict adherence to the design system here is unmatched. No more overriding random utility classes."
      },
      {
        name: "Elena Rodriguez",
        handle: "@elenadev",
        quote: "The animations are butter-smooth out of the box. Using framer-motion like this shows a deep understanding of UX."
      },
      {
        name: "David Kim",
        handle: "@davidk_tech",
        quote: "Zero slop. Just clean, semantic architecture. The way the Vault components snap together makes me actually enjoy frontend development again."
      },
      {
        name: "Priya Patel",
        handle: "@priyaui",
        quote: "The bento box layouts and the scroll interactions are top-tier. It looks like it took weeks to build, but it's just JSON-driven."
      }
    ]
  },
  cta: {
    headline: "Ready to Scale?",
    subheadline: "Deploy the Microapp Engine today and stop fighting your frontend. Build faster, break nothing.",
    buttonText: "Get the Engine"
  }
}

export const generateSiteData = async (prompt: string): Promise<SiteData> => {
  try {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("VITE_GEMINI_API_KEY is not defined. Falling back to mock data.");
      return mockSiteData;
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }]
          },
          contents: [
            {
              parts: [{ text: prompt }]
            }
          ],
          generationConfig: {
            responseMimeType: "application/json"
          }
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      throw new Error("No generated text found in Gemini response");
    }

    const parsedData = JSON.parse(generatedText) as SiteData;
    return parsedData;
  } catch (error) {
    console.error("Failed to generate site data from Gemini API, falling back to mock data:", error);
    return mockSiteData;
  }
}
