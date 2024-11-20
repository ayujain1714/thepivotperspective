import { z } from 'zod';

export const RegisterSchema = z.object({
  name: z.string().min(2).max(15),
  enrollmentNo: z.string().min(12).max(12),
  campus: z.enum(['LNCT', 'LNCTE', 'LNCTS', 'LNCTU']),
  course: z.enum(['B_Tech', 'BCA', 'MBA', 'BBA']),
  branch: z.enum(['IOT', 'CSE', 'AIDS', 'DS', 'AIML', 'ME']),
  semester: z.enum([
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
    'Sixth',
    'Seventh',
    'Eighth',
  ]),
  email: z.string().email({ message: 'Please enter your Email' }),
  phoneNumber: z.string().min(10).max(10),
});
