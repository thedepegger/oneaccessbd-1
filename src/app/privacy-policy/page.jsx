import { PolicyPage } from "@/components/policy-page";

export const metadata = {
  title: "Privacy Policy | One Access BD",
  description:
    "Review how One Access BD collects, uses, and protects your personal information in both English and Bangla.",
};

export default function PrivacyPolicyPage() {
  return <PolicyPage policyKey="privacy" />;
}
