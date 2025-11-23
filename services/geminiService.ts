import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the digital assistant for Shreyansh Shankar's portfolio website. 
Shreyansh is a DevOps Engineer, Full-Stack Developer, and Open Source Maintainer.
He maintains 'NodeBox' and specializes in Next.js, Flask, FastAPI, Docker, K8s, and CI/CD.
He is a student but performs at a senior technical level.

Your goal is to answer visitor questions about Shreyansh's skills, projects, and contact info.
Keep answers concise, technical, and slightly witty/cyberpunk in tone.
If asked about contact info, provide his email (shreyansh@example.com) or Twitter handle.
If asked about NodeBox, emphasize it's an open-source project he manages.

Do not hallucinate projects not mentioned.
Always remain professional but with a 'hacker' persona.
`;

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const generateChatResponse = async (history: {role: string, content: string}[], newMessage: string): Promise<string> => {
  try {
    const ai = getClient();
    
    // Convert simplified history to valid content format if needed, 
    // but for simple single-turn or short context, we can just use generateContent with the prompt.
    // For better context, we'll build a prompt string.
    
    const conversation = history.map(msg => `${msg.role.toUpperCase()}: ${msg.content}`).join('\n');
    const prompt = `${conversation}\nUSER: ${newMessage}\nASSISTANT:`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        maxOutputTokens: 300,
        temperature: 0.7,
      },
    });

    return response.text || "Connection interrupted. Re-establishing link...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Error: Uplink to core AI failed. Please try again later.";
  }
};