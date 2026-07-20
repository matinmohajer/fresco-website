import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/marketing/page-header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How XARP collects, uses, and protects information in connection with the Fresco AI mobile application and related services.",
};

const SUPPORT_EMAIL = "frescoai@xarp.org";

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Privacy Policy"
        title="How we handle your information."
        description={
          <>
            Effective date: July 20, 2026 · Last updated: July 20, 2026
          </>
        }
      />

      <section className="py-20 sm:py-28">
        <Container className="max-w-3xl">
          <div className="prose-legal flex flex-col gap-10 text-base leading-relaxed text-muted-foreground">
            <p>
              This Privacy Policy describes how XARP (&ldquo;XARP,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              collects, uses, and protects information in connection with the
              Fresco AI mobile application and related services (the
              &ldquo;Service&rdquo;).
            </p>

            <PolicySection number="1" title="Information We Collect">
              <p>
                <strong className="text-foreground">Account Information:</strong>{" "}
                Name, email address, phone number, employer/organization, and
                role, provided at signup or by your organization&apos;s
                administrator.
              </p>
              <p>
                <strong className="text-foreground">Field Content:</strong>{" "}
                Voice recordings, photos, text notes, spoken reasons, and
                location data submitted by users through the team member app
                or link while completing a To Do List.
              </p>
              <p>
                <strong className="text-foreground">Usage Data:</strong>{" "}
                Device type, app version, log data, and general usage
                analytics to help us maintain and improve the Service.
              </p>
              <p>
                <strong className="text-foreground">Location Data:</strong>{" "}
                Site check-in location, used to associate a To Do List and its
                completion certificate with the correct job site. Location is
                collected only during active check-in/visit sessions, not
                continuously.
              </p>
            </PolicySection>

            <PolicySection number="2" title="How We Use Information">
              <p>We use collected information to:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Transcribe voice input and structure it into a consistent, itemized To Do List using a deterministic engine</li>
                <li>Dispatch To Do Lists to the assigned team member and route completed sign-offs to your organization&apos;s dispatchers and admins</li>
                <li>Maintain task, timeline, and accountability records for your organization</li>
                <li>Provide customer support and troubleshoot issues</li>
                <li>Improve the accuracy and reliability of the Service, including voice transcription</li>
              </ul>
            </PolicySection>

            <PolicySection number="3" title="AI Processing & Third-Party Service Providers">
              <p>
                Fresco AI uses third-party AI providers (including
                speech-to-text services) to transcribe voice recordings; a
                deterministic engine then structures that transcript into a
                To Do List and completion certificate. These providers
                process data solely to deliver Fresco AI&apos;s functionality
                and are bound by contractual data protection obligations.
                Fresco AI also relies on infrastructure and payment providers
                to operate the Service, including cloud database/hosting and
                payment processing partners.
              </p>
              <p>We do not sell personal information or field content to third parties.</p>
            </PolicySection>

            <PolicySection number="4" title="Data Retention">
              <p>
                Field content, To Do Lists, and completion certificates are
                retained for as long as your organization&apos;s account is
                active, or as required to meet contractual, legal, or
                regulatory recordkeeping obligations (particularly relevant
                for municipal and county deployments). Organizations may
                request deletion of their data subject to applicable
                retention requirements.
              </p>
            </PolicySection>

            <PolicySection number="5" title="Data Security">
              <p>
                We use industry-standard safeguards, including encryption in
                transit and at rest, role-based access controls, and audit
                logging, to protect information submitted through the
                Service.
              </p>
            </PolicySection>

            <PolicySection number="6" title="Your Rights">
              <p>
                Depending on your location and organization&apos;s policies,
                you may have the right to access, correct, or request
                deletion of your personal information. Requests should be
                directed to your organization&apos;s Fresco AI administrator
                or to us at{" "}
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
            </PolicySection>

            <PolicySection number="7" title="Children's Privacy">
              <p>
                Fresco AI is a business tool intended for use by employees of
                client organizations and is not directed at or intended for
                use by children.
              </p>
            </PolicySection>

            <PolicySection number="8" title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. Material
                changes will be posted on this page with an updated effective
                date.
              </p>
            </PolicySection>

            <PolicySection number="9" title="Contact Us">
              <p>
                Questions about this Privacy Policy or your data:
                <br />
                <strong className="text-foreground">XARP</strong>
                <br />
                <a href={`mailto:${SUPPORT_EMAIL}`} className="text-primary hover:underline">
                  {SUPPORT_EMAIL}
                </a>
                <br />
                San Diego, CA
              </p>
            </PolicySection>
          </div>
        </Container>
      </section>
    </>
  );
}

function PolicySection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3 border-t border-border pt-8">
      <h2 className="flex items-baseline gap-3 text-xl font-semibold text-foreground">
        <span className="font-mono text-sm font-semibold text-faint-foreground">{number}</span>
        {title}
      </h2>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}
