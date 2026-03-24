"use client";

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const objectives = [
  "Create meaningful artistic experiences for eco-lodge guests.",
  "Produce site-specific mosaic artworks that enrich lodge spaces.",
  "Offer educational opportunities for local people.",
  "Strengthen regenerative and ecological storytelling through art.",
  "Build a cultural destination that combines hospitality, nature and creativity.",
];

const lodgeContributions = [
  "Promotion of the programme",
  "Accommodation and breakfast for the artist",
  "Workspace area",
];

const revenueOpportunities = [
  "Accommodations for participants",
  "Meals and refreshments for participants",
  "Unique cultural tourism offering",
  "Increased guest engagement",
];

const ecolodgeCurriculum = [
  "Introduction to Mosaic Art",
  "Design and Pattern Creation",
  "Tile Cutting and Material Exploration",
  "Assembly and Composition",
  "Finishing and Installation",
];

export default function CoursesTabs() {
  return (
    <Tabs className="mt-10" defaultValue="residency">
      <TabsList className="w-full">
        <TabsTrigger className="flex-1" value="residency">
          Eco-Lodge Residency
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="programmes">
          Educational Programmes
        </TabsTrigger>
      </TabsList>
      {/* ── Eco-Lodge Residency ── */}
      <TabsContent className="mt-8" value="residency">
        {/* Vision */}
        <section>
          <h2 className="mb-3 font-bold font-ojuju text-2xl md:text-3xl">
            Programme Vision
          </h2>
          <div className="mb-6 h-0.5 w-12 rounded-full bg-primary/40" />
          <p className="text-muted-foreground leading-relaxed">
            The Afrika Mosaics Eco‑Lodge Art Residency is a collaborative
            programme between Afrika Mosaics and eco‑lodges. It offers guests
            and local people who wish to learn the craft the opportunity to
            apprentice with a skilled mosaicist and Keeper of the Practice
            Githaka Karuri. The participants will gain the opportunity to engage
            with mosaic art, regenerative culture and place‑based creativity.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Through these workshops and collaborative murals participants
            connect material exploration and artistic expression with ecological
            awareness and local cultural heritage.
          </p>
        </section>

        {/* Objectives */}
        <section className="mt-12">
          <h2 className="mb-3 font-bold font-ojuju text-2xl md:text-3xl">
            Objectives
          </h2>
          <div className="mb-6 h-0.5 w-12 rounded-full bg-primary/40" />
          <ul className="space-y-3">
            {objectives.map((obj) => (
              <li className="flex items-start gap-3" key={obj}>
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{obj}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Residency Structure */}
        <section className="mt-12">
          <h2 className="mb-3 font-bold font-ojuju text-2xl md:text-3xl">
            Residency Structure
          </h2>
          <div className="mb-6 h-0.5 w-12 rounded-full bg-primary/40" />
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <p className="mb-4 text-muted-foreground">
              <span className="font-semibold text-foreground">
                Typical residency duration:
              </span>{" "}
              2 months
            </p>
            <p className="mb-3 font-semibold text-foreground">
              Activities may include:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Creation of one permanent mosaic artwork for the lodge",
                "Guest workshops",
                "Youth learning sessions",
                "Open studio sessions",
                "Artist talk or presentation",
              ].map((activity) => (
                <li className="flex items-start gap-2" key={activity}>
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Workshop Curriculum */}
        <section className="mt-12">
          <h2 className="mb-3 font-bold font-ojuju text-2xl md:text-3xl">
            Workshop Curriculum
          </h2>
          <div className="mb-6 h-0.5 w-12 rounded-full bg-primary/40" />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ecolodgeCurriculum.map((item, index) => (
              <div
                className="flex items-start gap-3 rounded-xl border bg-card p-3 shadow-sm"
                key={item}
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold font-ojuju text-primary text-sm">
                  {index + 1}
                </span>
                <span className="pt-1 text-sm leading-snug">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-1 rounded-xl border bg-card px-6 py-4 text-muted-foreground text-sm shadow-sm">
            <p>
              <span className="font-semibold text-foreground">
                Workshop length:
              </span>{" "}
              5 hours a day, five days a week
            </p>
            <p>
              <span className="font-semibold text-foreground">
                Ideal group size:
              </span>{" "}
              3–4 participants
            </p>
          </div>
        </section>

        {/* Investment */}
        <section className="mt-12">
          <h2 className="mb-3 font-bold font-ojuju text-2xl md:text-3xl">
            Investment
          </h2>
          <div className="mb-6 h-0.5 w-12 rounded-full bg-primary/40" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="mb-4 font-semibold text-lg">
                Artist Residency Fee
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between border-b pb-2">
                  <span className="text-muted-foreground">International</span>
                  <span className="font-bold font-ojuju text-xl">
                    USD 2,500
                  </span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-muted-foreground">Local</span>
                  <span className="font-bold font-ojuju text-xl">
                    Ksh. 150,000
                  </span>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground text-xs">
                These numbers can be adjusted depending on lodge budget, guest
                profile and project scale.
              </p>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <h3 className="mb-4 font-semibold text-lg">
                Eco‑Lodge Contribution
              </h3>
              <ul className="space-y-2">
                {lodgeContributions.map((item) => (
                  <li
                    className="flex items-start gap-2 text-muted-foreground"
                    key={item}
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Revenue Opportunities */}
        <section className="mt-12">
          <h2 className="mb-3 font-bold font-ojuju text-2xl md:text-3xl">
            Revenue Opportunities for the Lodge
          </h2>
          <div className="mb-6 h-0.5 w-12 rounded-full bg-primary/40" />
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {revenueOpportunities.map((item) => (
              <li
                className="flex items-start gap-3 rounded-xl border bg-card p-4 shadow-sm"
                key={item}
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-10 rounded-2xl border bg-card px-6 py-10 text-center shadow-sm">
          <h2 className="mb-2 font-ojuju font-semibold text-2xl">
            Interested in hosting a residency?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Get in touch to discuss how this programme can work for your lodge.
          </p>
          <Button asChild>
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </div>
      </TabsContent>
      {/* ── Educational Programmes ── */}
      <TabsContent className="mt-8" value="programmes">
        <div className="mb-6">
          <p className="text-muted-foreground">
            Structured programmes designed to teach mosaic craft, regenerative
            material practice, and creative discipline to youth and adults.
            Founded by Githaka Karuri under the Kai.retu&apos;s Forests
            initiative.
          </p>
        </div>

        <div className="space-y-6">
          {/* 1. Young Keepers Intensive */}
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-bold font-ojuju text-xl">
                  Young Keepers Intensive
                </h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  <Badge variant="secondary">Ages 12–17</Badge>
                  <Badge variant="outline">4 Saturdays · 16 hrs total</Badge>
                  <Badge variant="outline">13 students</Badge>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold font-ojuju text-lg">KES 24,000</p>
                <p className="text-muted-foreground text-xs">
                  Early bird: KES 21,000
                </p>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              A structured 4-week course for young people ready to engage deeply
              with craft, discipline, and creative responsibility. Students
              learn mosaic art as a practice of patience, ecological awareness,
              and cultural expression.
            </p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <p className="mb-2 font-semibold text-sm">Learning Outcomes</p>
                <ul className="space-y-1">
                  {[
                    "Fundamentals of mosaic design and composition",
                    "Safe tool handling and cutting techniques",
                    "Complete a finished mosaic panel (A3–A2 size)",
                    "Material reclamation & ecological thinking",
                    "Patience, focus, and presentation skills",
                  ].map((o) => (
                    <li
                      className="flex items-start gap-2 text-muted-foreground text-xs"
                      key={o}
                    >
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 font-semibold text-sm">Curriculum Weeks</p>
                <ul className="space-y-1">
                  {[
                    "Week 1 — Foundations & Design: Learning to See",
                    "Week 2 — Technical Skill & Control: Learning the Hand",
                    "Week 3 — Regeneration & Responsibility: Material as Memory",
                    "Week 4 — Finishing & Presentation: Becoming a Keeper",
                  ].map((w) => (
                    <li
                      className="flex items-start gap-2 text-muted-foreground text-xs"
                      key={w}
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground text-xs">
              Each student receives: completed mosaic artwork, certificate of
              completion, professional photograph of their work, and written
              mentor feedback. Sibling discount: 10%. 1–2 scholarship spaces
              available.
            </p>
          </div>

          {/* 2. Advanced Youth Studio */}
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-bold font-ojuju text-xl">
                  Advanced Youth Studio
                </h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  <Badge variant="secondary">Ages 14–18</Badge>
                  <Badge variant="outline">8–12 weeks</Badge>
                  <Badge variant="outline">8 students</Badge>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold font-ojuju text-lg">
                  KES 40,000–55,000
                </p>
                <p className="text-muted-foreground text-xs">
                  Depending on materials & scale
                </p>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              A deeper engagement with mosaic as a collaborative and
              architectural practice — participants work toward a real
              installation project.
            </p>
            <ul className="mt-4 grid grid-cols-1 gap-1 sm:grid-cols-2">
              {[
                "Advanced mosaic cutting techniques",
                "Collaborative installation processes",
                "Architectural integration of mosaic surfaces",
                "Complex design development",
                "Material selection and preparation",
                "Outdoor mosaic durability considerations",
                "Collaborative mural creation",
                "Participation in a real installation project",
              ].map((o) => (
                <li
                  className="flex items-start gap-2 text-muted-foreground text-xs"
                  key={o}
                >
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Junior Apprenticeship */}
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-bold font-ojuju text-xl">
                  Junior Apprenticeship
                </h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  <Badge variant="secondary">Ages 16–20</Badge>
                  <Badge variant="outline">3–6 months</Badge>
                  <Badge variant="outline">Application-based</Badge>
                </div>
              </div>
            </div>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              A professional-track apprenticeship for advanced students ready to
              work alongside the lead artist. Apprentices may assist in paid
              commissions, earn stipend opportunities, and be publicly
              recognised as Apprentice Keepers.
            </p>
            <ul className="mt-4 space-y-1">
              {[
                "Professional workflow",
                "Client communication basics",
                "Budgeting exposure",
                "Architectural integration",
                "Leadership with younger cohorts",
              ].map((o) => (
                <li
                  className="flex items-start gap-2 text-muted-foreground text-xs"
                  key={o}
                >
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {/* 4. School Partnership */}
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-bold font-ojuju text-xl">
                  School Partnership Programmes
                </h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  <Badge variant="secondary">Ages 12–17</Badge>
                  <Badge variant="outline">4 weeks or term-based</Badge>
                  <Badge variant="outline">~15 students</Badge>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold font-ojuju text-lg">
                  KES 300,000–360,000
                </p>
                <p className="text-muted-foreground text-xs">
                  Materials included
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-1">
              {[
                "Students complete individual mosaic artworks",
                "Optional collaborative mural for school campus",
                "Creative skill development and cultural engagement",
                "Opportunity for school exhibition or showcase",
              ].map((o) => (
                <li
                  className="flex items-start gap-2 text-muted-foreground text-xs"
                  key={o}
                >
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Adult & Professional */}
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-bold font-ojuju text-xl">
                  Adult & Professional Workshops
                </h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  <Badge variant="secondary">Adults</Badge>
                  <Badge variant="outline">
                    2-day intro or 7-day immersive
                  </Badge>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <p className="font-semibold text-sm">Introductory Workshop</p>
                  <Badge variant="outline">2 days</Badge>
                </div>
                <p className="mt-1 text-muted-foreground text-xs">
                  Artists, hobbyists, beginners · 8–15 participants
                </p>
                <p className="mt-3 text-muted-foreground text-xs leading-relaxed">
                  Foundations of mosaic + regenerative philosophy. An entry
                  point into the practice that builds community and feeds
                  advanced programmes.
                </p>
                <div className="mt-3 border-t pt-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Local</span>
                    <span className="font-bold font-ojuju">KES 15,000</span>
                  </div>
                  <div className="mt-1 flex justify-between text-xs">
                    <span className="text-muted-foreground">International</span>
                    <span className="font-bold font-ojuju">USD 200</span>
                  </div>
                  <p className="mt-1 text-muted-foreground text-xs">
                    Materials included
                  </p>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-start justify-between">
                  <p className="font-semibold text-sm">7-Day Immersive</p>
                  <Badge variant="outline">Application-based</Badge>
                </div>
                <p className="mt-1 text-muted-foreground text-xs">
                  8–12 participants · Artists, architects, builders,
                  space-holders
                </p>
                <p className="mt-1 font-medium text-xs italic">
                  &ldquo;Mosaic Art as Regenerative Practice&rdquo;
                </p>
                <ul className="mt-3 space-y-0.5">
                  {[
                    "Day 1 — Foundations",
                    "Day 2 — Material as Memory",
                    "Day 3 — Design & Composition",
                    "Day 4 — Technical Mastery",
                    "Day 5 — Architectural Integration",
                    "Day 6 — Collective Installation",
                    "Day 7 — Integration & Transmission",
                  ].map((d) => (
                    <li
                      className="flex items-start gap-2 text-muted-foreground text-xs"
                      key={d}
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-3 border-t pt-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Local</span>
                    <span className="font-bold font-ojuju">KES 75,000</span>
                  </div>
                  <div className="mt-1 flex justify-between text-xs">
                    <span className="text-muted-foreground">International</span>
                    <span className="font-bold font-ojuju">USD 1,500</span>
                  </div>
                  <p className="mt-1 text-muted-foreground text-xs">
                    Includes materials, tool access, certificate, and
                    professional photo documentation. Accommodation not included
                    unless bundled.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border bg-card px-6 py-10 text-center shadow-sm">
          <h2 className="mb-2 font-ojuju font-semibold text-2xl">
            Ready to enrol?
          </h2>
          <p className="mb-6 text-muted-foreground">
            Get in touch to enquire about any programme or upcoming cohorts.
          </p>
          <Button asChild>
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}
