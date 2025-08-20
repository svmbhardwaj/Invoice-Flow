import React from "react";

const FAQSection: React.FC = () => (
  <section className="w-full bg-gray-950 text-gray-100 py-16">
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-semibold mb-10 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        <details className="group border-b border-gray-800 pb-4">
          <summary className="cursor-pointer font-medium group-open:text-blue-400">
            Is invoice financing a loan?
          </summary>
          <p className="mt-2 text-gray-400">
            No. It's an advance on unpaid invoices—not a traditional loan—so you
            don't take on new debt.
          </p>
        </details>

        <details className="group border-b border-gray-800 pb-4">
          <summary className="cursor-pointer font-medium group-open:text-blue-400">
            How fast can I get funds through invoice financing?
          </summary>
          <p className="mt-2 text-gray-400">
            Typically within 24–48 hours after approval.
          </p>
        </details>

        <details className="group border-b border-gray-800 pb-4">
          <summary className="cursor-pointer font-medium group-open:text-blue-400">
            Will factoring hurt my company's credit score?
          </summary>
          <p className="mt-2 text-gray-400">
            No—factoring doesn't affect your credit since you're not taking on
            new debt.
          </p>
        </details>

        <details className="group border-b border-gray-800 pb-4">
          <summary className="cursor-pointer font-medium group-open:text-blue-400">
            What's the difference between invoice financing and invoice factoring?
          </summary>
          <p className="mt-2 text-gray-400">
            With factoring, you sell invoices and the factor collects payment.
            With financing, you retain ownership and collect yourself.
          </p>
        </details>

        <details className="group">
          <summary className="cursor-pointer font-medium group-open:text-blue-400">
            Can startups and small businesses use invoice financing?
          </summary>
          <p className="mt-2 text-gray-400">
            Yes—many fintech providers fund businesses based on invoice quality,
            not just your credit history.
          </p>
        </details>
      </div>
    </div>
  </section>
);

export default FAQSection;
