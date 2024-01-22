import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function JoinMail({ userFirstname }) {
  return (
    <Html>
      <Head />
      <Preview>Welcome to the most premium platform levelup.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`https://leveluphubs.com/assets/images/logo.png`}
            height="50"
            alt="Levelup"
            style={logo}
          />
          <Text style={paragraph}>Hi {userFirstname},</Text>
          <Text style={paragraph}>
            Thank you for your interest in <strong>Level up hubs.</strong>. We
            hope all your doubts have been cleared and you are all set to take
            the next steps.
          </Text>
          <Text>
            Schedule a walk-in to our hub by clicking the button below
          </Text>
          <Text>
            If you need any assistance, write to us at support@leveluphubs.com
            and our student counselor will help you with ease.
          </Text>
          <Text>
            Take advantage of this opportunity now and see how we help you build
            your dream career!
          </Text>
          <Section style={btnContainer}>
            <Button
              pX={12}
              pY={12}
              style={button}
              href="https://calendly.com/leveluphubs/30min"
            >
              Schedule Walk-in
            </Button>
          </Section>
          <Text style={paragraph}>
            Best Regards,
            <br />
            Admission Office
            <br />
            The Level Up
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            R-CAT, Tonk Rd, Panch Batti, Sangram Colony, Ashok Nagar
            <br />
            Jaipur, Rajasthan 302007
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#ffffff",
  fontFamily: "roboto",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center",
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
