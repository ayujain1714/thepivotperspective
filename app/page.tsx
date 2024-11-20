import { Button } from '@/components/ui/button';
import { Armchair, CalendarDays, CalendarIcon } from 'lucide-react';
import Link from 'next/link';

export default function Component() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-50"
        >
          <source src="/placeholder.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="container relative z-10 mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Experience Ideas Worth Spreading
          </h1>
          <p className="mb-10 text-xl sm:text-2xl">
            Book your tickets now for the Pivot Point event and be inspired by
            world-changing thinkers.
          </p>
          <Button size="lg">
            <Armchair className="mr-2 size-6" strokeWidth={2.5} />
            <Link href="/form" className="text-lg">
              Book Your Ticket
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
