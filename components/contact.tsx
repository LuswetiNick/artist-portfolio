import { Calendar, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "#",
  },
  {
    icon: Calendar,
    label: "Availability",
    value: "Open to opportunities",
    href: "#",
  },
];

// const socialLinks = [
//   {
//     icon: Instagram,
//     label: "Instagram",
//     href: "https://instagram.com",
//     color: "hover:text-gray-400",
//   },
//   {
//     icon: Twitter,
//     label: "Twitter",
//     href: "https://twitter.com",
//     color: "hover:text-sky-400",
//   },
// ];

const Contact = () => {
  return (
    <section className="px-6 py-20" id="contact">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-3 text-center font-bold text-3xl md:text-4xl">
          Get in Touch
        </h2>
        <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-primary" />
        <p className="mx-auto mb-16 max-w-2xl text-center text-muted-foreground">
          Whether you're interested in commissioning a piece, inquiring about
          availability, or just want to say hello, I'd love to hear from you.
        </p>
        {/* <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="rounded-lg bg-gray-50 p-8 shadow-md">
            <h3 className="mb-6 font-semibold text-xl">Send a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <label
                    className="mb-1 block font-medium text-gray-700 text-sm"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="w-full rounded-md border border-gray-300 px-4 py-2 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
                    id="name"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="mb-1 block font-medium text-gray-700 text-sm"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="w-full rounded-md border border-gray-300 px-4 py-2 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
                    id="email"
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label
                  className="mb-1 block font-medium text-gray-700 text-sm"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className="w-full rounded-md border border-gray-300 px-4 py-2 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
                  id="subject"
                  type="text"
                />
              </div>
              <div>
                <label
                  className="mb-1 block font-medium text-gray-700 text-sm"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full rounded-md border border-gray-300 px-4 py-2 transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
                  id="message"
                  rows="5"
                />
              </div>
              <button
                className="w-full transform rounded-md bg-primary-500 py-3 text-white transition-all duration-300 hover:scale-[1.01] hover:bg-primary-600"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-bold font-heading text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-accent/50"
                      key={item.label}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <p className="font-body font-medium text-foreground">
                          {item.label}
                        </p>
                        <p className="font-body text-muted-foreground text-sm">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-bold font-heading text-foreground">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        className={`rounded-full bg-muted p-3 transition-all duration-300 hover:bg-accent ${social.color}`}
                        href={social.href}
                        key={social.label}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Icon className="h-5 w-5" />
                        <span className="sr-only">{social.label}</span>
                      </a>
                    );
                  })}
                </div>
                <p className="mt-4 font-body text-muted-foreground text-sm">
                  Follow me for updates on my latest projects and tech insights!
                </p>
              </CardContent>
            </Card>
          </div>
        </div> */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="space-y-4">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 font-bold font-heading text-foreground">
                  <Send className="h-5 w-5 text-primary" />
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label className="font-body font-medium" htmlFor="name">
                        Name *
                      </Label>
                      <Input className="font-body" id="name" name="name" />
                    </div>
                    <div className="space-y-2">
                      <Label className="font-body font-medium" htmlFor="email">
                        Email *
                      </Label>
                      <Input
                        className="font-body"
                        id="email"
                        name="email"
                        placeholder="your.email@example.com"
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="font-body font-medium" htmlFor="message">
                      Message *
                    </Label>
                    <Textarea
                      className="resize-none font-body"
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, opportunity, or just say hello!"
                      rows={6}
                    />
                  </div>

                  <Button
                    className="w-full font-body font-medium"
                    size="lg"
                    type="submit"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            {/* <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-bold font-heading text-foreground">
                  Connect With Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        className={`rounded-full bg-muted p-3 transition-all duration-300 hover:bg-accent ${social.color}`}
                        href={social.href}
                        key={social.label}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Icon className="h-5 w-5" />
                        <span className="sr-only">{social.label}</span>
                      </a>
                    );
                  })}
                </div>
                <p className="mt-4 font-body text-muted-foreground text-sm">
                  Follow me for updates on my latest projects and tech insights!
                </p>
              </CardContent>
            </Card> */}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="font-bold font-heading text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      className="flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-accent/50"
                      key={item.label}
                    >
                      <Icon className="h-5 w-5 flex-shrink-0 text-primary" />
                      <div>
                        <p className="font-body font-medium text-foreground">
                          {item.label}
                        </p>
                        <p className="font-body text-muted-foreground text-sm">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
