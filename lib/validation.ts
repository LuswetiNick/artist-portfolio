import { z } from "zod";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email"),
  message: z.string().min(1, "Message is required"),
});

export default formSchema;
