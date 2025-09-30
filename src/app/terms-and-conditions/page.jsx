import { PolicyPage } from "@/components/policy-page";

export const metadata = {
  title: "Terms & Conditions | One Access BD",
  description:
    "Understand the terms and conditions for using One Access BD services, available in English and Bangla.",
};

export default function TermsAndConditionsPage() {
  return <PolicyPage policyKey="terms" />;
}
