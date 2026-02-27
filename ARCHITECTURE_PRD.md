# Core Engine: Architecture & Product Requirements Document (PRD)

## Product Vision
To build a universal, premium Next.js AI Wrapper boilerplate. This core engine will be duplicated to create dozens of micro-apps for commercial sale. The app must feel like high-end software: smooth animations, skeleton loaders, streaming text, and a flawless dark/light mode toggle.

## The "Dynamic Config" System
The entire application must be driven by an `app-config.json` file located in the root directory. 

**Example Structure:**
```json
{
  "appMeta": {
    "name": "AI SEO Pillar Generator",
    "description": "Generate comprehensive SEO content clusters.",
    "themeColor": "zinc"
  },
  "monetization": {
    "platform": "gumroad",
    "requireLicense": true
  },
  "inputs": [
    { "id": "topic", "label": "Main Topic", "type": "text", "placeholder": "e.g., Real Estate Investing", "required": true },
    { "id": "tone", "label": "Tone of Voice", "type": "select", "options": ["Professional", "Conversational", "Authoritative"] }
  ],
  "ai": {
    "model": "gemini-2.5-flash",
    "systemPrompt": "You are a master SEO strategist. You will receive a topic and tone. Return a structured markdown response..."
  }
}