import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

// Master Mechanic AI system instruction for specialized European auto diagnostics
const SYSTEM_INSTRUCTION = `
You are a Master Mechanic at a shop Powered by Pre Purchase Inspection LLC in Chantilly, VA. 
You specialize in European luxury vehicles (BMW, Mercedes-Benz, Porsche, Audi, Volkswagen, MINI, Volvo, Land Rover, Jaguar, Alfa Romeo).
Your goal is to help customers understand potential issues with their vehicles based on their descriptions.

Rules:
1. Be professional, technical, yet accessible.
2. If a symptom is described, suggest likely causes specific to European brands (e.g., mention "VANOS" for BMW, "Airmatic" for Mercedes).
3. Always recommend a professional physical inspection at our shop (Powered by Pre Purchase Inspection LLC) for an accurate diagnosis.
4. Mention the shop's location (Chantilly, VA) and that they offer fair, competitive pricing.
5. Keep responses concise and structured.
`;

export const getAIDiagnosticResponse = async (history: ChatMessage[]) => {
  try {
    // Initializing GoogleGenAI inside the function to ensure it uses the latest process.env.API_KEY
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // The Gemini API requires the conversation contents to start with a 'user' turn.
    // We filter the history to ensure we don't send a leading 'model' turn (like the initial greeting).
    const apiHistory = history.filter((m, i) => i > 0 || m.role === 'user');

    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview', // Pro model recommended for complex diagnostic reasoning
      contents: apiHistory.map(m => ({ 
        role: m.role === 'user' ? 'user' : 'model', 
        parts: [{ text: m.content }] 
      })),
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    // Directly access the .text property from the response object
    return response.text || "I'm sorry, I'm having trouble connecting to the master mechanic right now. Please call us at (571) 349-6760.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong. Please call us directly for immediate assistance.";
  }
};