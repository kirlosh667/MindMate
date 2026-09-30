import { NextResponse } from "next/server";

// Mock AI Provider as required in Section 40: AI MOCK MODE
export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    // Safety check implementation (Section 11: Risk/Safety Engine)
    const latestMessage = messages[messages.length - 1]?.content || "";
    const lowerMessage = latestMessage.toLowerCase();
    
    // Simple mock risk detection
    const highRiskWords = ['suicide', 'kill myself', 'end it all', 'die'];
    const isHighRisk = highRiskWords.some(word => lowerMessage.includes(word));

    if (isHighRisk) {
      return NextResponse.json({
        role: "assistant",
        content: "I'm really concerned about what you just shared. Your safety is the most important thing right now. Please know that you are not alone and support is available immediately.\n\n**If you are in immediate danger, please contact:**\n- Emergency Services (911/112)\n- National Crisis Hotline\n- Your Institution's 24/7 Crisis Team\n\nWould you like me to connect you to a human counsellor right now?",
        isHighRisk: true
      });
    }

    // Mock supportive response
    return NextResponse.json({
      role: "assistant",
      content: "I hear that you're going through a challenging time. It takes courage to share that. As a wellbeing assistant, I'm here to listen and help you explore coping strategies. Would you like to try a short grounding exercise together, or would you prefer to just talk about what's on your mind?",
      isHighRisk: false
    });

  } catch (error) {
    return NextResponse.json({ error: "Failed to process AI response" }, { status: 500 });
  }
}
