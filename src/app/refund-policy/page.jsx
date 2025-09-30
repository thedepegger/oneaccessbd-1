import { PolicyPage } from "@/components/policy-page";

export const metadata = {
  title: "Refund Policy | One Access BD",
  description:
    "Learn when refunds are available from One Access BD and how to request one, in English and Bangla.",
};

export default function RefundPolicyPage() {
  return <PolicyPage policyKey="refund" />;
}
