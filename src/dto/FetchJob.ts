import { z } from 'zod';

export const JobDtoSchema = z
  .object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string(),
    url: z.string(),
    image_url: z.string(),
    company: z.string(),
    experience: z.string(),
    doIApplied: z.boolean(),
    JobAdditionalInfo: z.string(),
  })
  .strict();


// Now add this object into an array
export const JobsDtoSchema = z.array(JobDtoSchema)

export type JobDtoType = z.infer<typeof JobDtoSchema>;

