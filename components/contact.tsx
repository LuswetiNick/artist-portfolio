"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import formSchema, { type FormData } from "@/lib/validation";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const Contact = ({
  sendMail,
}: {
  sendMail: (
    formData: FormData
  ) => Promise<{ success: boolean; error: string | null }>;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = async (formData: FormData) => {
    const result = await sendMail(formData);
    if (result.success) {
      toast.success("Message sent successfully");
      reset();
    } else {
      toast.error(result.error);
    }
  };
  return (
    <section className="px-6 py-20" id="contact">
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
          <div className="max-w-xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Card className="w-[500px]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 font-bold font-heading text-foreground">
                    <Send className="h-5 w-5 text-primary" />
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 space-y-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label className="font-body font-medium" htmlFor="name">
                        Name *
                      </Label>
                      <Input
                        className="font-body"
                        id="name"
                        {...register("name")}
                      />
                      {errors.name && (
                        <span className="text-destructive">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label className="font-body font-medium" htmlFor="email">
                        Email *
                      </Label>
                      <Input
                        className="font-body"
                        id="email"
                        {...register("email")}
                        type="email"
                      />
                      {errors.email && (
                        <span className="text-destructive">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-body font-medium" htmlFor="message">
                      Message *
                    </Label>
                    <Textarea
                      className="resize-none font-body"
                      id="message"
                      {...register("message")}
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      rows={6}
                    />
                  </div>

                  <Button
                    className="mt-4 w-full font-body font-medium"
                    size="lg"
                    type="submit"
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </CardContent>
              </Card>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
