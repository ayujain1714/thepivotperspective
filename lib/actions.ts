'use server';

import { parseWithZod } from '@conform-to/zod';
import { RegisterSchema } from '@/lib/zod';
import prisma from '@/lib/db';
import { redirect } from 'next/navigation';

export async function RegisterPerson(
  currentState: unknown,
  formData: FormData,
) {
  const submission = parseWithZod(formData, {
    schema: RegisterSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  await prisma.register.create({
    data: {
      name: submission.value.name,
      enrollmentNo: submission.value.enrollmentNo,
      campus: submission.value.campus,
      course: submission.value.course,
      branch: submission.value.branch,
      semester: submission.value.semester,
      email: submission.value.email,
      phoneNumber: submission.value.phoneNumber,
    },
  });

  return redirect('/success');
}
