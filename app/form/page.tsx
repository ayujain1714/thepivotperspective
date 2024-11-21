'use client';

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { RegisterPerson } from '@/lib/actions';
// import Form from 'next/form';
// import { useActionState } from 'react';
// import { useForm } from '@conform-to/react';
// import { RegisterSchema } from '@/lib/zod';
// import { parseWithZod } from '@conform-to/zod';
// import { Course, Branch, Semester, Campus } from '@prisma/client';
// import { Button } from '@/components/ui/button';
// import { Loader } from 'lucide-react';
// import ThemeToggle from '@/components/ThemeSwitcher';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import SeatLayout from '@/components/seat/SeatLayout';

// export default function Home() {
//   const [lastResult, formAction, isPending] = useActionState(
//     RegisterPerson,
//     null,
//   );

//   const [form, field] = useForm({
//     lastResult,
//     onValidate({ formData }) {
//       return parseWithZod(formData, { schema: RegisterSchema });
//     },
//     shouldValidate: 'onBlur',
//     shouldRevalidate: 'onInput',
//   });

//   return (
//     <ScrollArea>
//       <SeatLayout />
//       <div className="flex h-full w-screen flex-col items-center justify-center">
//         <Card className="my-8 sm:my-20 sm:w-[600px]">
//           <CardHeader>
//             <div className="flex justify-between">
//               <CardTitle className="text-3xl tracking-wide">Register</CardTitle>
//               <ThemeToggle />
//             </div>
//             <CardDescription className="font-mont font-bold tracking-wide">
//               Book your seat by filling the form.
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <Form
//               className="grid gap-4"
//               id={form.id}
//               onSubmit={form.onSubmit}
//               action={formAction}
//             >
//               <div className="grid gap-2">
//                 <Label htmlFor="name">Name</Label>
//                 <Input
//                   id="name"
//                   key={field.name.key}
//                   name={field.name.name}
//                   defaultValue={field.name.initialValue}
//                   placeholder="Lorem Ipsum"
//                 />
//                 <p className="text-sm text-destructive">{field.name.errors}</p>
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="phoneNumber">Phone Number</Label>
//                 <Input
//                   id="phoneNumber"
//                   type="number"
//                   key={field.phoneNumber.key}
//                   name={field.phoneNumber.name}
//                   defaultValue={field.phoneNumber.initialValue}
//                   placeholder="Enter Phone Number"
//                 />
//                 <p className="text-sm text-destructive">
//                   {field.phoneNumber.errors}
//                 </p>
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   key={field.email.key}
//                   name={field.email.name}
//                   defaultValue={field.email.initialValue}
//                   placeholder="loremipsum@email.com"
//                 />
//                 <p className="text-sm text-destructive">{field.email.errors}</p>
//               </div>
//               <div className="grid gap-2">
//                 <Label htmlFor="enrollmentNo">Enrollment No.</Label>
//                 <Input
//                   id="enrollmentNo"
//                   key={field.enrollmentNo.key}
//                   name={field.enrollmentNo.name}
//                   defaultValue={field.enrollmentNo.initialValue}
//                   placeholder="Enter Enrollment No."
//                 />
//                 <p className="text-sm text-destructive">
//                   {field.enrollmentNo.errors}
//                 </p>
//               </div>
//               <div className="grid gap-4 sm:grid-cols-2">
//                 <div className="grid gap-2">
//                   <Label htmlFor="campus">Campus</Label>
//                   <Select
//                     defaultValue={field.campus.initialValue}
//                     name={field.campus.name}
//                   >
//                     <SelectTrigger id="campus">
//                       <SelectValue placeholder="Select Campus" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {Object.values(Campus).map((campus) => (
//                         <SelectItem key={campus} value={campus}>
//                           {campus}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                   <p className="text-sm text-destructive">
//                     {field.campus.errors}
//                   </p>
//                 </div>
//                 <div className="grid gap-2">
//                   <Label htmlFor="course">Course</Label>
//                   <Select
//                     defaultValue={field.course.initialValue}
//                     name={field.course.name}
//                   >
//                     <SelectTrigger id="course">
//                       <SelectValue placeholder="Select Course" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {Object.values(Course).map((course) => (
//                         <SelectItem key={course} value={course}>
//                           {course}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                   <p className="text-sm text-destructive">
//                     {field.course.errors}
//                   </p>
//                 </div>
//               </div>
//               <div className="grid gap-4 sm:grid-cols-2">
//                 <div className="grid gap-2">
//                   <Label htmlFor="branch">Branch</Label>
//                   <Select
//                     defaultValue={field.branch.initialValue}
//                     name={field.branch.name}
//                   >
//                     <SelectTrigger id="branch">
//                       <SelectValue placeholder="Select Branch" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {Object.values(Branch).map((branch) => (
//                         <SelectItem key={branch} value={branch}>
//                           {branch}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                   <p className="text-sm text-destructive">
//                     {field.branch.errors}
//                   </p>
//                 </div>
//                 <div className="grid gap-2">
//                   <Label htmlFor="semester">Semester</Label>
//                   <Select
//                     defaultValue={field.semester.initialValue}
//                     name={field.semester.name}
//                   >
//                     <SelectTrigger id="semester">
//                       <SelectValue placeholder="Select Semester" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {Object.values(Semester).map((semester) => (
//                         <SelectItem key={semester} value={semester}>
//                           {semester}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                   <p className="text-sm text-destructive">
//                     {field.semester.errors}
//                   </p>
//                 </div>
//               </div>
//               {isPending ? (
//                 <Button disabled variant="outline">
//                   <Loader className="mr-2 size-6 animate-spin [animation-duration:3s]" />
//                   Submitting...
//                 </Button>
//               ) : (
//                 <Button
//                   size="sm"
//                   variant="ringHover"
//                   type="submit"
//                   className="px-5 text-lg"
//                 >
//                   Submit
//                 </Button>
//               )}
//             </Form>
//           </CardContent>
//         </Card>
//       </div>
//     </ScrollArea>
//   );
// }

'use client';

import React, { useState } from 'react';

type SelectedSeat = {
  partIndex: number;
  rowIndex: number;
  seatIndex: number;
};

export default function Home() {
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
                          ? 'selected animate-vibrate h-[30px] w-[30px] cursor-pointer rounded-[7px] border border-[#4fffb391] bg-[#4fffb391] text-center text-[7px] font-bold leading-[30px] transition-colors'
                          : 'h-[30px] w-[30px] cursor-pointer rounded-[7px] border border-white bg-transparent text-center text-[7px] leading-[30px] transition-colors'
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
        <button className="submit mt-7 bg-[#7e7e7e55] w-fit mx-auto py-2 px-4 rounded-md border-2 text-slate-300 border-slate-600" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}
