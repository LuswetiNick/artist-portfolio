import nodemailer from "nodemailer";
import About from "@/components/about";
import Blogs from "@/components/blogs";
// import Blogs from "@/components/blogs";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Showcase from "@/components/showcase";
import { getErrorMessage } from "@/lib/error";
import type { FormData } from "@/lib/validation";
import formSchema from "@/lib/validation";

const Home = () => {
  const sendMail = async (formData: FormData) => {
    "use server";
    formSchema.parse(formData);
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
      });
      const mailOptions = {
        from: process.env.SMTP_USERNAME, // Use your authenticated Gmail address
        to: process.env.MAIL_RECEIVER_ADDRESS,
        subject: `New message from ${formData.name} via Portfolio Contact Form`,
        text: `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
        html: `
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message.replace(/\n/g, "<br>")}</p>
        `,
        replyTo: formData.email, // This allows you to reply directly to the sender
      };
      await transporter.sendMail(mailOptions);
      return { success: true, error: null };
    } catch (error) {
      return { success: false, error: getErrorMessage(error) };
    }
  };
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Showcase />
      <Blogs />
      <Contact sendMail={sendMail} />
      <Footer />
    </main>
  );
};
export default Home;
