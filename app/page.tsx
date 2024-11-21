import ThemeToggle from '@/components/ThemeSwitcher';
import { Button } from '@/components/ui/button';
import { Armchair } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex h-dvh w-screen items-center justify-center bg-gradient-to-b from-foreground/40 to-background">
      <div className="max-w-2xl text-center">
        <p className="text-xl tracking-wider">The Pivot Perspective</p>
        <div className="mt-5 max-w-2xl">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-wide lg:text-7xl">
            Experience Ideas
            <br /> Worth Spreading
          </h1>
        </div>
        <div className="mt-5 max-w-3xl">
          <p className="font-mont text-lg text-muted-foreground">
            Join us for an empowering event that bridges the gap between
            aspiring students and accomplished achievers. Hear inspiring
            stories, gain valuable insights, and fuel your journey to success.{' '}
          </p>
        </div>
        <div className="mt-8 grid gap-3 px-24 sm:grid-cols-2">
          <Link href="/form">
            <Button size="lg" variant="ringHover" className="text-forground">
              <Armchair size={30} strokeWidth={2} className="mr-2" />
              Count me In
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            See our Guests
          </Button>
        </div>
      </div>
    </section>
  );
}
