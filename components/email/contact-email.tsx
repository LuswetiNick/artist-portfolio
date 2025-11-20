import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailData {
  name: string;
  email: string;
  message: string;
}

const ContactFormEmail = ({ name, email, message }: EmailData) => {
  return (
    <Html dir="ltr" lang="en">
      <Head />
      <Preview>New contact form submission</Preview>
      <Tailwind>
        <Body className="bg-gray-100 py-[40px] font-sans">
          <Container className="mx-auto max-w-[600px] rounded-[8px] bg-white p-[32px] shadow-lg">
            <Section className="rounded-[8px] bg-gray-50 p-[24px]">
              <Heading className="mb-[16px] font-semibold text-[18px] text-gray-900">
                New Contact Form Submission
              </Heading>
              <Text className="mb-[8px] text-[14px] text-gray-600">
                <strong>Name:</strong> {name}
              </Text>
              <Text className="mb-[8px] text-[14px] text-gray-600">
                <strong>Email:</strong> {email}
              </Text>
              <Text className="mb-[16px] text-[14px] text-gray-600">
                <strong>Message:</strong>
              </Text>
              <Text className="text-[14px] text-gray-700 leading-[20px]">
                {message}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
