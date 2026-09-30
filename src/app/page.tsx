import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Shield, Heart, Users, Activity, ArrowRight, Accessibility } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      {/* Navigation */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" fill="currentColor" />
            <span className="text-xl font-semibold tracking-tight text-foreground">MindMate</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">How it Works</Link>
            <Link href="#privacy" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:block">Log in</Link>
            <Button asChild className="rounded-full px-6 shadow-sm">
              <Link href="/onboarding">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 px-4 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 inset-x-0 h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-secondary/30 blur-[100px] rounded-full opacity-50" />
            <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-primary/20 blur-[120px] rounded-full opacity-50" />
          </div>

          <div className="container mx-auto max-w-4xl text-center space-y-8 relative z-10">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm text-primary font-medium mb-4 shadow-sm">
              <span>Student wellbeing, reimagined</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
              Calm. Connect. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Care.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Private, accessible, and student-centered mental wellbeing support designed for higher education.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" asChild className="rounded-full px-8 h-12 w-full sm:w-auto shadow-md hover:shadow-lg transition-all text-base">
                <Link href="/onboarding">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-8 h-12 w-full sm:w-auto bg-background/50 backdrop-blur text-base border-primary/20 hover:bg-primary/5">
                <Link href="#features">Explore MindMate</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Comprehensive Support</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything you need to navigate the pressures of student life, built with your privacy and safety in mind.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <Card className="border-0 shadow-md bg-background/60 backdrop-blur hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    <Shield className="w-6 h-6" />
                  </div>
                  <CardTitle>Anonymous & Secure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Connect and seek support without revealing your identity. We separate your clinical data from your community profile.
                  </p>
                </CardContent>
              </Card>

              {/* Feature 2 */}
              <Card className="border-0 shadow-md bg-background/60 backdrop-blur hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-secondary/20 flex items-center justify-center mb-4 text-secondary-foreground">
                    <Accessibility className="w-6 h-6" />
                  </div>
                  <CardTitle>Accessibility First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Built for everyone. Features include high contrast, screen reader optimization, and voice/gesture inputs.
                  </p>
                </CardContent>
              </Card>

              {/* Feature 3 */}
              <Card className="border-0 shadow-md bg-background/60 backdrop-blur hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center mb-4 text-accent-foreground">
                    <Users className="w-6 h-6" />
                  </div>
                  <CardTitle>Peer Connection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Share experiences and support fellow students in a moderated, safe, and anonymous community space.
                  </p>
                </CardContent>
              </Card>
              
              {/* Feature 4 */}
              <Card className="border-0 shadow-md bg-background/60 backdrop-blur hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 rounded-2xl bg-chart-1/10 flex items-center justify-center mb-4 text-chart-1">
                    <Activity className="w-6 h-6" />
                  </div>
                  <CardTitle>AI First-Aid</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Immediate guidance, grounding exercises, and resource signposting when you need a little extra support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Disclaimer Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <div className="p-6 rounded-2xl bg-muted border border-border/50 shadow-inner">
              <h3 className="font-medium text-foreground mb-2 flex items-center justify-center gap-2">
                <Shield className="w-4 h-4 text-muted-foreground" />
                Important Notice
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                MindMate provides wellbeing support, coping strategies, and screening tools. 
                <strong className="font-semibold text-foreground"> It does not provide medical diagnosis or replace professional psychiatric care. </strong>
                If you are in immediate danger, please contact local emergency services or your institution's crisis team.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-primary" fill="currentColor" />
            <span className="font-medium">MindMate &copy; {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-foreground transition-colors">Accessibility Statement</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
