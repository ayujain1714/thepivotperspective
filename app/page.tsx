'use client';

import ThemeToggle from '@/components/ThemeSwitcher';
import { Button } from '@/components/ui/button';
import { Armchair} from 'lucide-react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { Lights } from '@/components/lights';
import Image from 'next/image';

import * as React from 'react';

export default function Hero() {
  return (
    <>
      <header className="absolute top-0 h-[80px] bg-transparent">
        Header
      </header>
      <section className="flex h-dvh w-screen items-center justify-center bg-gradient-to-b">
        <div className={'bg-grid-white/[0.03] relative h-full w-full px-4'}>
          <div
            className={
              'animate-moveUp relative z-[1] flex h-full w-full flex-col items-start justify-center sm:items-center'
            }
          >
            <div className="max-w-2xl text-center">
              <p className="text-xl tracking-wider">The Pivot Perspective</p>
              <div className="mt-5 max-w-2xl">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-wide lg:text-7xl">
                  Experience Ideas
                  <br /> Worth Spreading
                </h1>
              </div>
              <div className="mt-5 max-w-3xl">
                <p className="font-mont text-muted-foreground text-lg">
                  Join us for an empowering event that bridges the gap between
                  aspiring students and accomplished achievers. Hear inspiring
                  stories, gain valuable insights, and fuel your journey to
                  success.{' '}
                </p>
              </div>
              <div className="mt-8 grid gap-3 px-24 sm:grid-cols-2">
                <Link href="/form">
                  <Button
                    size="lg"
                    variant="ringHover"
                    className="text-forground"
                  >
                    <Armchair size={30} strokeWidth={2} className="mr-2" />
                    Count me In
                  </Button>
                </Link>
                <Link href="#guest">
                <Button size="lg" variant="outline">
                  See our Guests
                </Button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={
              'animate-appear absolute bottom-0 left-0 z-0 h-full w-full opacity-0'
            }
          >
            <Lights />
          </div>
        </div>
      </section>

      <section id='guest' className="flex min-h-dvh w-screen items-center justify-center bg-gradient-to-b">
        <div
          className={'bg-grid-white/[0.03] relative min-h-[100vh] w-full px-4'}
        >
          <p className="my-[50px] text-center text-6xl">Our Guests</p>
          <div id="cards" className="m-auto flex w-[70vw] flex-wrap gap-[20px]">
            {/* Card */}
            <div className="bg-gradient-to-br hofrom-blue-500 hover:to-purple-700 from-[#6dbbff75] to-[#6dbbff05] m-auto mt-14 flex w-[85vw] flex-col items-center gap-[50px] rounded-3xl border-2 border-slate-500 p-4 shadow-[0_1px_30px_rgba(98,182,255,0.4)] md:w-[450px]">
              <div className="flex-col items-start px-4 pb-0 pt-7">
                <p className="text-4xl font-bold uppercase">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="text-large font-bold">Frontend Radio</h4>
              </div>
              <div className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="mt-16 rounded-xl object-cover"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={400}
                />
              </div>
            </div>
            {/* Card */}
            <div className="bg-gradient-to-br hover:from-blue-500 hover:to-purple-700 from-[#6dbbff75] to-[#6dbbff05] m-auto mt-14 flex w-[85vw] flex-col items-center gap-[50px] rounded-3xl border-2 border-slate-500 p-4 shadow-[0_1px_30px_rgba(98,182,255,0.4)] md:w-[450px]">
              <div className="flex-col items-start px-4 pb-0 pt-7">
                <p className="text-4xl font-bold uppercase">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="text-large font-bold">Frontend Radio</h4>
              </div>
              <div className="overflow-visible py-2">
                <img
                  alt="Card background"
                  className="mt-16 rounded-xl object-cover"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={400}
                />
              </div>
            </div>
            {/* Card */}
            <div className="bg-gradient-to-br hover:from-blue-500 hover:to-purple-700 from-[#6dbbff75] to-[#6dbbff05] m-auto mt-14 flex w-[85vw] flex-col items-center gap-[50px] rounded-3xl border-2 border-slate-500 p-4 shadow-[0_1px_30px_rgba(98,182,255,0.4)] md:w-[450px]">
              <div className="flex-col items-start px-4 pb-0 pt-7">
                <p className="text-4xl font-bold uppercase">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="text-large font-bold">Frontend Radio</h4>
              </div>
              <div className="overflow-visible py-2">
                <img
                  alt="Card background"
                  className="mt-16 rounded-xl object-cover"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={400}
                />
              </div>
            </div>
            {/* Card */}
            <div className="bg-gradient-to-br hover:from-blue-500 hover:to-purple-700 from-[#6dbbff75] to-[#6dbbff05] m-auto mt-14 flex w-[85vw] flex-col items-center gap-[50px] rounded-3xl border-2 border-slate-500 p-4 shadow-[0_1px_30px_rgba(98,182,255,0.4)] md:w-[450px]">
              <div className="flex-col items-start px-4 pb-0 pt-7">
                <p className="text-4xl font-bold uppercase">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="text-large font-bold">Frontend Radio</h4>
              </div>
              <div className="overflow-visible py-2">
                <img
                  alt="Card background"
                  className="mt-16 rounded-xl object-cover"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={400}
                />
              </div>
            </div>
            {/* Card */}
            <div className="bg-gradient-to-br hover:from-blue-500 hover:to-purple-700 from-[#6dbbff75] to-[#6dbbff05] m-auto mt-14 flex w-[85vw] flex-col items-center gap-[50px] rounded-3xl border-2 border-slate-500 p-4 shadow-[0_1px_30px_rgba(98,182,255,0.4)] md:w-[450px]">
              <div className="flex-col items-start px-4 pb-0 pt-7">
                <p className="text-4xl font-bold uppercase">Daily Mix</p>
                <small className="text-default-500">12 Tracks</small>
                <h4 className="text-large font-bold">Frontend Radio</h4>
              </div>
              <div className="overflow-visible py-2">
                <img
                  alt="Card background"
                  className="mt-16 rounded-xl object-cover"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>Footer</footer>
    </>
  );
}
