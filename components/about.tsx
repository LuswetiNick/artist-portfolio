// import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

// import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

// const contactInfo = [
//   {
//     icon: Mail,
//     label: "Email",
//     value: "hello@example.com",
//     href: "mailto:hello@example.com",
//   },
//   {
//     icon: Phone,
//     label: "Phone",
//     value: "+1 (555) 123-4567",
//     href: "tel:+15551234567",
//   },
//   {
//     icon: MapPin,
//     label: "Location",
//     value: "San Francisco, CA",
//     href: "#",
//   },
//   {
//     icon: Calendar,
//     label: "Availability",
//     value: "Open to opportunities",
//     href: "#",
//   },
// ];

const About = () => {
  return (
    <section className="px-6 py-20" id="about">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-3 text-center font-bold font-ojuju text-3xl md:text-4xl">
          The Artist
        </h2>
        <div className="mx-auto mb-16 h-1 w-20 rounded-full bg-primary" />
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <Image
              alt="Portrait of the artist"
              className="h-full w-full transform rounded-lg shadow-xl transition-transform duration-500 hover:scale-[1.02]"
              height={500}
              src="/images/about.jpg"
              width={500}
            />
            <div className="-bottom-6 -right-6 -z-10 absolute h-32 w-32 rounded-full bg-primary-100" />
            <div className="-top-6 -left-6 -z-10 absolute h-24 w-24 rounded-full bg-primary-200" />
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-2xl">
              Hi, I'm <span className="text-primary">Githaka Karuri</span>
            </h3>
            <p className="mb-4">
              I was born with a natural talent for creating. Having not had the
              opportunity to attend art school, it never presented itself as a
              career path. Instead I pursued other avenues, with art remaining
              just an occasional form of expression. Art eventually found me
              again, a bit further ahead in life’s journey in a form with which
              I instantly fell in love; mosaic making.
            </p>
            <p className="mb-4">
              Initially it was a lone walk, learning from whatever sources I
              could find. However, I have since encountered many teachers, whom
              I gratefully acknowledge. My creativity is not limited to mosaic
              making. I am skilled in other forms of art, including jewelry,
              weaving, natural building and setting up regenerative food
              systems.
            </p>
            <p>
              I have had the pleasure of making mosaic murals for institutions
              such as Safaricom telecom company, Nyumbani children's village,
              Shree Kuchi Leva Patel Samaj school, Sacred Heart cathedral, as
              well as many private commissions in Kenya. I have also created
              many other pieces which have found a home all around the world.
              Karibu nyumbani. Welcome home.
            </p>
            {/* <Card className="mt-4">
              <CardHeader>
                <CardTitle className="font-bold font-heading text-foreground">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-row flex-wrap space-y-4">
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
            </Card> */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
