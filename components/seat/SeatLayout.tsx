'use client';

import React, { useState } from 'react';

type SelectedSeat = {
  partIndex: number;
  rowIndex: number;
  seatIndex: number;
};

export default function SeatLayout() {
  const [selectedSeat, setSelectedSeat] = useState<SelectedSeat | null>(null);
  const [seatLayout] = useState<number[][]>([
    [16, 16, 18, 18, 18, 16],
    [15, 16, 18, 18, 18],
  ]);

  const handleSeatSelection = (
    partIndex: number,
    rowIndex: number,
    seatIndex: number,
  ) => {
    setSelectedSeat({
      partIndex,
      rowIndex,
      seatIndex,
    });
  };

  const handleSubmit = () => {
    // Send selectedSeats to the backend

    console.log(selectedSeat);
    fetch('/api/book-seats', {
      method: 'POST',
      body: JSON.stringify({ selectedSeat }),
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful booking
        } else {
          // Handle error
        }
      })
      .catch((error) => {
        // Handle network error
      });
  };
  return (
    <>
      <div className="main border-box flex h-[200vh] w-full flex-col">
        <div className="mx-auto mb-[70px] box-border h-[200px] w-[80vw] place-content-center rounded-b-xl border-2 border-[#49494975] px-2 text-center shadow-[0_35px_60px_-15px_rgba(255,255,255,0.2)] md:h-[300px] md:w-[80vw] md:border-4">
          <span className="stage bg-gradient-to-r from-[#69f0ffa2] to-[#495bffac] bg-clip-text text-2xl font-bold text-transparent [text-shadow:_0_0_60px_rgb(98_182_255_/_90%)] md:text-7xl">
            Tickets Coming Soon...
          </span>
        </div>
        <div className="seat-layout border-box flex h-fit w-full flex-row gap-[30px] overflow-x-auto overflow-y-hidden p-[18px]">
          {seatLayout.map((part, partIndex) => (
            <div
              key={partIndex}
              className="seat-part flex w-fit flex-col gap-[20px]"
            >
              {part.map((rowLength, rowIndex) => (
                <div
                  key={rowIndex}
                  className="seat-row flex flex-row justify-center gap-[10px]"
                >
                  {[...Array(rowLength)].map((_, seatIndex) => (
                    <div
                      key={seatIndex}
                      onClick={() =>
                        handleSeatSelection(partIndex, rowIndex, seatIndex)
                      }
                      className={`seat ${
                        selectedSeat &&
                        selectedSeat.partIndex === partIndex &&
                        selectedSeat.rowIndex === rowIndex &&
                        selectedSeat.seatIndex === seatIndex
                          ? 'selected animate-vibrate h-[30px] w-[30px] cursor-pointer rounded-lg border border-[#4fffb391] bg-[#4fffb391] text-center text-[7px] font-bold leading-[30px] transition-all duration-300'
                          : 'h-[30px] w-[30px] cursor-pointer rounded-lg border border-white bg-transparent text-center text-[7px] leading-[30px] transition-all duration-300'
                      }`}
                    >
                      {partIndex == 0 ? 'L' : 'R'}-{rowIndex + 1}-
                      {seatIndex + 1}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
        <button className="submit mx-auto mt-40" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
};
