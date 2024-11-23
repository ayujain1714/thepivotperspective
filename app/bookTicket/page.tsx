'use client';

import RegisterForm from '@/components/RegisterForm';
import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import prisma from '@/lib/db';

type SelectedSeat = {
  partIndex: number;
  rowIndex: number;
  seatIndex: number;
};

interface Seat {
  partIndex: number;
  rowIndex: number;
  seatIndex: number;
  status: 'Available' | 'Pending' | 'Booked';
}

export default function Home() {
  const [selectedSeat, setSelectedSeat] = useState<SelectedSeat | null>(null);
  const [seatLayout] = useState<number[][]>([
    [15, 16, 16, 18, 18, 18, 18, 18, 18, 18],
    [17, 17, 18, 18, 18, 18, 18, 18, 15, 19],
  ]);

  const [bookedSeats, setBookedSeats] = useState<Seat[]>([]);
  const [isSubmited, setIsSubmited] = useState<boolean>(false);

  // const fetchBookedSeats = fetch('/api/getData')
  // .then((res) => res.json())
  // .then((data) => setBookedSeats(data));

  useEffect(() => {
    // fetch('/api/getData')
    // .then((res) => res.json())
    // .then((data) => setBookedSeats(data));
    setBookedSeats([
      // Left Part - First Row (Fully Booked)
      { partIndex: 0, rowIndex: 0, seatIndex: 0, status: 'Booked' },
      { partIndex: 0, rowIndex: 0, seatIndex: 1, status: 'Booked' },
      { partIndex: 0, rowIndex: 0, seatIndex: 2, status: 'Booked' },
      { partIndex: 0, rowIndex: 0, seatIndex: 3, status: 'Booked' },
      { partIndex: 0, rowIndex: 0, seatIndex: 4, status: 'Booked' },
      { partIndex: 0, rowIndex: 0, seatIndex: 5, status: 'Booked' },
      { partIndex: 0, rowIndex: 0, seatIndex: 6, status: 'Booked' },
      { partIndex: 0, rowIndex: 0, seatIndex: 7, status: 'Booked' },
      { partIndex: 0, rowIndex: 0, seatIndex: 8, status: 'Booked' },
      { partIndex: 0, rowIndex: 0, seatIndex: 9, status: 'Booked' },
      { partIndex: 0, rowIndex: 0, seatIndex: 10, status: 'Booked' },
      { partIndex: 0, rowIndex: 0, seatIndex: 11, status: 'Booked' },
      { partIndex: 0, rowIndex: 0, seatIndex: 12, status: 'Booked' },
      { partIndex: 0, rowIndex: 0, seatIndex: 13, status: 'Booked' },
      { partIndex: 0, rowIndex: 0, seatIndex: 14, status: 'Booked' },

      // Right Part - First Row (Fully Booked)
      { partIndex: 1, rowIndex: 0, seatIndex: 0, status: 'Booked' },
      { partIndex: 1, rowIndex: 0, seatIndex: 1, status: 'Booked' },
      { partIndex: 1, rowIndex: 0, seatIndex: 2, status: 'Booked' },
      { partIndex: 1, rowIndex: 0, seatIndex: 3, status: 'Booked' },
      { partIndex: 1, rowIndex: 0, seatIndex: 4, status: 'Booked' },
      { partIndex: 1, rowIndex: 0, seatIndex: 5, status: 'Booked' },
      { partIndex: 1, rowIndex: 0, seatIndex: 6, status: 'Booked' },
      { partIndex: 1, rowIndex: 0, seatIndex: 7, status: 'Booked' },
      { partIndex: 1, rowIndex: 0, seatIndex: 8, status: 'Booked' },
      { partIndex: 1, rowIndex: 0, seatIndex: 9, status: 'Booked' },
      { partIndex: 1, rowIndex: 0, seatIndex: 10, status: 'Booked' },
      { partIndex: 1, rowIndex: 0, seatIndex: 11, status: 'Booked' },
      { partIndex: 1, rowIndex: 0, seatIndex: 12, status: 'Booked' },
      { partIndex: 1, rowIndex: 0, seatIndex: 13, status: 'Booked' },
      { partIndex: 1, rowIndex: 0, seatIndex: 14, status: 'Booked' },
      { partIndex: 1, rowIndex: 0, seatIndex: 15, status: 'Booked' },
      { partIndex: 1, rowIndex: 0, seatIndex: 16, status: 'Booked' },
      { partIndex: 1, rowIndex: 0, seatIndex: 17, status: 'Booked' },
      { partIndex: 1, rowIndex: 0, seatIndex: 18, status: 'Booked' },
      {
        partIndex: 0,
        rowIndex: 2,
        seatIndex: 3,
        status: 'Booked',
      },
      {
        partIndex: 0,
        rowIndex: 3,
        seatIndex: 10,
        status: 'Pending',
      },
      {
        partIndex: 0,
        rowIndex: 4,
        seatIndex: 7,
        status: 'Booked',
      },
      {
        partIndex: 0,
        rowIndex: 5,
        seatIndex: 4,
        status: 'Pending',
      },
      {
        partIndex: 0,
        rowIndex: 7,
        seatIndex: 8,
        status: 'Booked',
      },
      {
        partIndex: 1,
        rowIndex: 1,
        seatIndex: 2,
        status: 'Pending',
      },
      {
        partIndex: 1,
        rowIndex: 3,
        seatIndex: 15,
        status: 'Booked',
      },
      {
        partIndex: 1,
        rowIndex: 6,
        seatIndex: 8,
        status: 'Pending',
      },
      {
        partIndex: 1,
        rowIndex: 8,
        seatIndex: 3,
        status: 'Booked',
      },
      {
        partIndex: 0,
        rowIndex: 8,
        seatIndex: 4,
        status: 'Booked',
      },
      {
        partIndex: 0,
        rowIndex: 5,
        seatIndex: 6,
        status: 'Pending',
      },
      {
        partIndex: 1,
        rowIndex: 9,
        seatIndex: 14,
        status: 'Booked',
      },
      {
        partIndex: 1,
        rowIndex: 4,
        seatIndex: 11,
        status: 'Pending',
      },
      {
        partIndex: 1,
        rowIndex: 2,
        seatIndex: 7,
        status: 'Booked',
      },
      {
        partIndex: 1,
        rowIndex: 6,
        seatIndex: 4,
        status: 'Booked',
      },
      {
        partIndex: 0,
        rowIndex: 1,
        seatIndex: 12,
        status: 'Pending',
      },
      {
        partIndex: 0,
        rowIndex: 9,
        seatIndex: 17,
        status: 'Booked',
      },
      {
        partIndex: 0,
        rowIndex: 4,
        seatIndex: 2,
        status: 'Pending',
      },
    ]);
    // fetchBookedSeats();
  }, []);

  const handleSeatSelection = (
    partIndex: number,
    rowIndex: number,
    seatIndex: number,
  ) => {
    const seatStatus = getSeatStatus(partIndex, rowIndex, seatIndex);

    if (seatStatus !== 'Pending' && seatStatus !== 'Booked') {
      setSelectedSeat({
        partIndex,
        rowIndex,
        seatIndex,
      });
    }
  };

  const getSeatStatus = (
    partIndex: number,
    rowIndex: number,
    seatIndex: number,
  ): 'Available' | 'Pending' | 'Booked' => {
    const bookedSeat = bookedSeats.find(
      (seat) =>
        seat.partIndex === partIndex &&
        seat.rowIndex === rowIndex &&
        seat.seatIndex === seatIndex,
    );
    return bookedSeat ? bookedSeat.status : 'Available';
  };

  // const getSeatClass = (
  //   partIndex: number,
  //   rowIndex: number,
  //   seatIndex: number,
  // ): string => {
  //   const status = getSeatStatus(partIndex, rowIndex, seatIndex);

  //   let seatClass = 'cursor-pointer transition-all'; // Replace with your default class

  //   if (status === 'Booked') {
  //     seatClass += ' animate-vibrate text-red-500';
  //   } else if (status === 'Pending') {
  //     seatClass += ' animate-vibrate text-yellow-500';
  //   }

  //   if (
  //     selectedSeat?.partIndex === partIndex &&
  //     selectedSeat?.rowIndex === rowIndex &&
  //     selectedSeat?.seatIndex === seatIndex
  //   ) {
  //     seatClass += ' animate-vibrate text-green-500';
  //   }

  //   return twMerge(seatClass);
  // };
  const getSeatClass = (
    partIndex: number,
    rowIndex: number,
    seatIndex: number,
  ): string => {
    const status = getSeatStatus(partIndex, rowIndex, seatIndex);

    let seatClass =
      'md:h-[30px] md:w-[30px] h-[20px] w-[20px] cursor-pointer rounded-[7px] border border-white bg-transparent text-center text-[5px] md:text-[7px] md:leading-[30px] leading-[20px] transition-all'; // Replace with your default class

    if (status === 'Booked') {
      seatClass +=
        ' animate-vibrate border-[#ff5959cc] bg-[#ff5959cc] font-bold';
    } else if (status === 'Pending') {
      seatClass +=
        ' animate-vibrate border-[#faff69a2] bg-yellow-500 font-bold';
    }

    if (
      selectedSeat?.partIndex === partIndex &&
      selectedSeat?.rowIndex === rowIndex &&
      selectedSeat?.seatIndex === seatIndex
    ) {
      seatClass +=
        ' animate-vibrate border-[#4fffb391] bg-[#4fffb391] font-bold';
    }

    return twMerge(seatClass);
  };

  const handleSubmit = () => {
    console.log(selectedSeat);
    if (selectedSeat) {
      setIsSubmited(true);
    } else {
      window.alert('Please Select a seat');
    }
  };

  return (
    <>
      <div className="main border-box flex h-fit w-full flex-col">
        <div className="mx-auto mb-[70px] box-border h-[200px] w-[80vw] place-content-center rounded-b-xl border-2 border-[#49494975] px-2 text-center shadow-[0_35px_60px_-15px_rgba(255,255,255,0.2)] md:h-[300px] md:w-[80vw] md:border-4">
          <span className="stage bg-gradient-to-r from-[#69f0ffa2] to-[#495bffac] bg-clip-text text-2xl font-bold text-transparent [text-shadow:_0_0_60px_rgb(98_182_255_/_90%)] md:text-7xl">
            Tickets Coming Soon...
          </span>
        </div>
        <div className="m-auto mb-10 flex h-fit w-full overflow-x-auto overflow-y-hidden">
          <div className="seat-layout border-box mx-auto flex h-fit w-fit flex-row gap-[30px] p-[18px]">
            {seatLayout.map((part, partIndex) => (
              <div
                key={partIndex}
                className="seat-part flex w-fit flex-col gap-[10px] md:gap-[20px]"
              >
                {part.map((rowLength, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="seat-row flex flex-row justify-center gap-[5px]"
                  >
                    {[...Array(rowLength)].map((_, seatIndex) => (
                      <div
                        key={seatIndex}
                        onClick={() =>
                          handleSeatSelection(partIndex, rowIndex, seatIndex)
                        }
                        className={`seat ${getSeatClass(
                          partIndex,
                          rowIndex,
                          seatIndex,
                        )}`}
                      >
                        {/* <Armchair
                      key={seatIndex}
                      strokeWidth={3}
                      onClick={() =>
                        handleSeatSelection(partIndex, rowIndex, seatIndex)
                      }
                      className={`seat ${getSeatClass(
                        partIndex,
                        rowIndex,
                        seatIndex,
                      )}`}
                    /> */}
                        {partIndex == 0 ? 'L' : 'R'}-{rowIndex + 1}-
                        {seatIndex + 1}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        {!isSubmited ? (
          <Button
            onClick={handleSubmit}
            size="lg"
            variant="ringHover"
            className="mx-auto w-fit text-white"
          >
            Fill Data
          </Button>
        ) : (
          <RegisterForm />
        )}
      </div>
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
          <div className="mt-[40px] text-[#a8c797d3]">
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
