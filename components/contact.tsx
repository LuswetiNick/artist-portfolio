"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { sendContactEmail } from "@/app/actions/sendEmail";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Field, FieldError, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type ContactFormData = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const { isSubmitting: loading } = form.formState;

  async function onSubmit(data: ContactFormData) {
    try {
      const result = await sendContactEmail(data);

      if (result.success) {
        toast.success("Message sent successfully! I'll get back to you soon.");
        form.reset();
      } else {
        toast.error(result.error || "Failed to send message");
      }
    } catch {
      toast.error("An unexpected error occurred");
    }
  }
  return (
    <section className="overflow-hidden px-6 py-20" id="contact">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-3 text-center font-bold font-ojuju text-3xl md:text-4xl">
          Get in Touch
        </h2>
        <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-primary" />
        <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
          Whether you're interested in commissioning a piece, inquiring about
          availability, or just want to say hello, I'd love to hear from you.
        </p>
        <div className="flex w-full items-center justify-center">
          <div className="w-full max-w-xl px-4">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-bold font-heading text-foreground">
                  <Send className="h-5 w-5 text-primary" />
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FieldGroup>
                    <Controller
                      control={form.control}
                      name="name"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                          <Input
                            id={field.name}
                            {...field}
                            aria-invalid={fieldState.invalid}
                            disabled={loading}
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                    <Controller
                      control={form.control}
                      name="email"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor={field.name}>
                            Email Address
                          </FieldLabel>
                          <Input
                            id={field.name}
                            {...field}
                            aria-invalid={fieldState.invalid}
                            disabled={loading}
                            type="email"
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                    <Controller
                      control={form.control}
                      name="message"
                      render={({ field, fieldState }) => (
                        <Field data-invalid={fieldState.invalid}>
                          <FieldLabel htmlFor={field.name}>Message</FieldLabel>
                          <Textarea
                            id={field.name}
                            {...field}
                            aria-invalid={fieldState.invalid}
                            className="resize-none"
                            disabled={loading}
                          />
                          {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                          )}
                        </Field>
                      )}
                    />
                  </FieldGroup>
                  <Button
                    className="mt-4 w-full"
                    disabled={loading}
                    type="submit"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
