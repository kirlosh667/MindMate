"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, User, Globe, ArrowRight } from "lucide-react";

export default function Onboarding() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
      <Card className="w-full max-w-lg border-0 shadow-lg">
        {step === 1 && (
          <>
            <CardHeader>
              <CardTitle className="text-2xl">Welcome to MindMate</CardTitle>
              <CardDescription>Choose how you want to use the platform.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <button onClick={() => setStep(2)} className="w-full flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all text-left">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Anonymous Student</h4>
                  <p className="text-sm text-muted-foreground">Get support without revealing your identity. Highly recommended for privacy.</p>
                </div>
              </button>
              
              <button onClick={() => setStep(2)} className="w-full flex items-start gap-4 p-4 rounded-xl border border-border hover:border-secondary hover:bg-secondary/10 transition-all text-left">
                <div className="bg-secondary/20 p-3 rounded-lg text-secondary-foreground">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Institutional Login</h4>
                  <p className="text-sm text-muted-foreground">Connect with your university account to access official counselling.</p>
                </div>
              </button>
            </CardContent>
          </>
        )}

        {step === 2 && (
          <>
            <CardHeader>
              <CardTitle className="text-2xl">Language & Accessibility</CardTitle>
              <CardDescription>Customize your MindMate experience.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Preferred Language</label>
                <div className="flex gap-2">
                  <Button variant="default" className="flex-1">English</Button>
                  <Button variant="outline" className="flex-1">Hindi</Button>
                  <Button variant="outline" className="flex-1">Tamil</Button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Accessibility Options</label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-start">Screen Reader</Button>
                  <Button variant="outline" className="justify-start">High Contrast</Button>
                  <Button variant="outline" className="justify-start">Large Text</Button>
                  <Button variant="outline" className="justify-start">Voice Input</Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleNext}>Continue <ArrowRight className="w-4 h-4 ml-2" /></Button>
            </CardFooter>
          </>
        )}

        {step === 3 && (
          <>
            <CardHeader>
              <CardTitle className="text-2xl">Privacy & Consent</CardTitle>
              <CardDescription>We take your privacy seriously.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>
                <strong>What we collect:</strong> Minimal usage data to improve the app. If you chose Anonymous mode, we do not know your real name.
              </p>
              <p>
                <strong>Confidentiality:</strong> Your journal entries and AI chats are private. They are not shared with your institution.
              </p>
              <p>
                <strong>Crisis Limitations:</strong> This app is not a replacement for emergency services. In case of high risk, we will provide emergency contacts.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleNext}>I Understand & Agree</Button>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
}
