import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, Book, MessageCircle, Music, ShieldAlert, Heart, Calendar } from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 border-r bg-muted/20 p-4 flex flex-col gap-2">
        <div className="flex items-center gap-2 px-2 py-4 mb-4">
          <Heart className="w-6 h-6 text-primary" fill="currentColor" />
          <span className="font-semibold text-lg">MindMate</span>
        </div>
        <Button variant="secondary" className="justify-start" asChild><Link href="/dashboard">Dashboard</Link></Button>
        <Button variant="ghost" className="justify-start" asChild><Link href="/dashboard/chat">AI First-Aid</Link></Button>
        <Button variant="ghost" className="justify-start" asChild><Link href="/dashboard/journal">Mood Journal</Link></Button>
        <Button variant="ghost" className="justify-start" asChild><Link href="/dashboard/community">Peer Support</Link></Button>
        <Button variant="ghost" className="justify-start" asChild><Link href="/dashboard/counselling">Counselling</Link></Button>
        <div className="mt-auto pt-4">
          <Button variant="destructive" className="w-full justify-start bg-destructive/10 text-destructive hover:bg-destructive/20 border-0">
            <ShieldAlert className="w-4 h-4 mr-2" />
            Emergency
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Good Morning, Anonymous.</h1>
          <p className="text-muted-foreground mt-1">Take a deep breath. You're in a safe space.</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Action Cards */}
          <Card className="bg-primary/5 border-primary/20 hover:border-primary/40 transition-colors cursor-pointer">
            <CardHeader className="pb-2">
              <Activity className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Wellbeing Check</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Take a quick 2-minute screening to understand how you're feeling today.</p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 border-secondary/20 hover:border-secondary/40 transition-colors cursor-pointer">
            <CardHeader className="pb-2">
              <MessageCircle className="w-8 h-8 text-secondary-foreground mb-2" />
              <CardTitle>AI First-Aid</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Chat securely with MindMate for grounding exercises and immediate support.</p>
            </CardContent>
          </Card>

          <Card className="bg-accent/10 border-accent/20 hover:border-accent/40 transition-colors cursor-pointer">
            <CardHeader className="pb-2">
              <Book className="w-8 h-8 text-accent-foreground mb-2" />
              <CardTitle>Exam Stress Mode</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Turn on focus timers and get quick breathing exercises for study stress.</p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-xl font-semibold mb-4">Your Wellness Journey</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><Calendar className="w-5 h-5"/> Recent Journal Entries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center p-6 bg-muted/30 rounded-lg border border-dashed">
                <p className="text-sm text-muted-foreground">You haven't written in your journal yet.</p>
                <Button variant="outline" className="mt-4" asChild><Link href="/dashboard/journal">Write Entry</Link></Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><Music className="w-5 h-5"/> Recommended for You</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="p-3 rounded-lg bg-muted/30 flex justify-between items-center">
                  <span className="text-sm font-medium">5-Minute Deep Breathing</span>
                  <Button size="sm" variant="secondary">Start</Button>
                </li>
                <li className="p-3 rounded-lg bg-muted/30 flex justify-between items-center">
                  <span className="text-sm font-medium">Overcoming Imposter Syndrome</span>
                  <Button size="sm" variant="secondary">Read</Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
