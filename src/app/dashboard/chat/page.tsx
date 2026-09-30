"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldAlert, Send, Bot, User } from "lucide-react";
import Link from "next/link";

type Message = {
  role: "user" | "assistant";
  content: string;
  isHighRisk?: boolean;
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi there. I'm MindMate, your supportive wellbeing assistant. I'm here to listen, offer grounding exercises, or help you find resources. How are you feeling today?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { role: "user" as const, content: input }];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      
      const data = await res.json();
      setMessages([...newMessages, data]);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 border-r bg-muted/20 p-4 hidden md:flex flex-col gap-2">
        <div className="flex items-center gap-2 px-2 py-4 mb-4">
          <Bot className="w-6 h-6 text-primary" />
          <span className="font-semibold text-lg">AI First-Aid</span>
        </div>
        <Button variant="ghost" className="justify-start" asChild><Link href="/dashboard">Back to Dashboard</Link></Button>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 p-4 md:p-6 flex flex-col h-screen">
        <Card className="flex-1 flex flex-col shadow-sm border-0 bg-muted/10">
          <CardHeader className="border-b bg-background rounded-t-xl py-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bot className="w-5 h-5 text-primary" /> MindMate Support
            </CardTitle>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl p-4 flex gap-3 ${
                  msg.role === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : msg.isHighRisk 
                      ? 'bg-destructive/10 border border-destructive/20 text-foreground'
                      : 'bg-background border shadow-sm text-foreground'
                }`}>
                  {msg.role === 'assistant' && (
                    <div className="mt-1">
                      {msg.isHighRisk ? <ShieldAlert className="w-5 h-5 text-destructive" /> : <Bot className="w-5 h-5 text-primary" />}
                    </div>
                  )}
                  <div className="whitespace-pre-wrap text-sm leading-relaxed">{msg.content}</div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-background border shadow-sm rounded-2xl p-4 text-sm text-muted-foreground flex gap-2 items-center">
                  <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce [animation-delay:-.15s]" />
                  <div className="w-2 h-2 bg-primary/50 rounded-full animate-bounce [animation-delay:-.3s]" />
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="p-4 bg-background border-t rounded-b-xl">
            <form 
              onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
              className="flex w-full gap-2"
            >
              <Input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Type how you're feeling... (Try: 'I feel overwhelmed' or 'I want to die' to test safety)"
                className="flex-1 rounded-full border-border bg-muted/30 focus-visible:ring-primary/50"
              />
              <Button type="submit" size="icon" className="rounded-full shrink-0 shadow-sm" disabled={isLoading || !input.trim()}>
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
