'use client';

import { Button } from '@/components/ui/button';
import { Armchair, UsersRound } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
// import { Lights } from '@/components/Lights';
import { Link as Scroll } from 'react-scroll/modules';

import * as React from 'react';
import GuestCard from '@/components/GuestCard';

export default function Hero() {
  return (
    <>
      <header className="absolute top-0 h-[80px] bg-transparent"></header>
      <section className="flex h-screen w-screen items-center justify-center bg-gradient-to-b sm:h-dvh">
        <div className="relative h-full w-full px-4 bg-grid-white/[0.03]">
          <div className="relative z-[1] flex h-full w-full animate-moveUp flex-col items-start justify-center sm:items-center">
            <div className="max-w-2xl text-center">
              <div className="flex justify-center">
                <Image
                  alt="Logo"
                  className="object-cover text-center"
                  src="/logo.webp"
                  width={125}
                  height={125}
                />
              </div>
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
                  stories, gain valuable insights, and fuel your journey to
                  success.
                </p>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <Link href="/bookTicket">
                  <Button size="lg" variant="ringHover" className="text-white">
                    <Armchair size={30} strokeWidth={2} className="mr-2" />
                    Count me In
                  </Button>
                </Link>
                <Scroll to="guests" smooth={true} duration={1000}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="p-5 text-white"
                  >
                    <UsersRound
                      size={30}
                      strokeWidth={2}
                      className="mr-2 p-0.5"
                    />
                    See our Guests
                  </Button>
                </Scroll>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 z-0 h-full w-full animate-appear opacity-0">
            {/* <Lights /> */}
          </div>
        </div>
      </section>

      <section
        id="guests"
        className="flex min-h-full w-screen items-center justify-center bg-gradient-to-b"
      >
        <div className="relative h-full w-full bg-grid-white/[0.03]">
          <p className="pt-10 text-center text-5xl font-bold md:text-6xl">
            Our Guests
          </p>
          <div
            id="cards"
            className="flex flex-wrap justify-center px-4 sm:grid lg:grid-cols-2 xl:grid-cols-3"
          >
            <GuestCard
              name="CrazyDeep"
              designation="Youtuber"
              description="Commentator"
              imageSrc="/Crazydeep.webp"
              link="https://www.youtube.com/@crazydeep07"
            />
            <GuestCard
              name="Vishwa Mohan"
              designation="Aimerz"
              description="Founder & CEO"
              imageSrc="/Vishwa.webp"
              link="https://www.linkedin.com/in/vishwa-mohan/?originalSubdomain=in"
            />
            <GuestCard
              name="Samrat Bhai"
              designation="Youtuber"
              description="Commentator"
              imageSrc="/Samrat.webp"
              link="https://www.youtube.com/@SAMRATBHAI"
            />
          </div>
          <div className="flex w-screen flex-wrap justify-center md:gap-10">
            <GuestCard
              name="Jayesh Ranjan"
              designation="House of Virality"
              description="Founder & CEO"
              imageSrc="/Jayesh.webp"
              link="https://www.linkedin.com/in/jayesh-ranjan-singh/"
            />
            <GuestCard
              name="Prabal Bhatt"
              designation="Instagramer"
              description="Content Creator"
              imageSrc="/Prabal.webp"
              link="https://www.instagram.com/prabalbhatt16"
            />
          </div>
        </div>
      </section>
      <footer className="py-10">
        <div className="items-center justify-around text-center max-sm:space-y-4 sm:flex">
          <div className="flex justify-center">
            <Image
              alt="Adbrotisers"
              src="/adbrotisers.webp"
              width={200}
              height={50}
            />
          </div>
          <div className="text-[#a8c797d3]">
            <p className="font-bold tracking-wider">
              Student Coordinator: Parth Sahu
            </p>
            <p className="font-bold tracking-wider">
              Saransh Tiwari: 7869770020
            </p>
            <p className="font-bold tracking-wider">
              Shreyansh Saxena: 9479966175
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
