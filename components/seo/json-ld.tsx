export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ragen",
    url: "https://ragen.org",
    logo: "https://ragen.org/logo.png",
    email: "ragen@ragen.org",
    telephone: "+917078082045",
    description:
      "Ragen engineers enterprise software, AI systems, cloud infrastructure and digital platforms for ambitious organizations worldwide.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.instagram.com/ragentechnology",
      "https://www.facebook.com/share/1FASA4qxdi/",
      "https://www.linkedin.com/company/ragentechnologies/",
    ],
    knowsAbout: [
      "Software Engineering",
      "Artificial Intelligence",
      "Cloud Computing",
      "DevOps",
      "Data Engineering",
      "Cybersecurity",
      "Blockchain",
      "Mobile Development",
      "Enterprise Integration",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ragen",
    url: "https://ragen.org",
    description:
      "Enterprise software, AI systems, cloud infrastructure and digital platforms.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://ragen.org/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What types of projects does Ragen work on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We build enterprise software, SaaS platforms, AI systems, cloud infrastructure, automation solutions, mobile applications and blockchain-based products.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with startups or enterprises?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We work with startups, growth-stage companies and established enterprises looking to modernize systems, launch products or scale operations.",
        },
      },
      {
        "@type": "Question",
        name: "Can you integrate with existing systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We frequently integrate with existing CRMs, ERPs, databases, APIs and third-party platforms to ensure smooth adoption.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer AI development services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We build AI agents, RAG systems, copilots, automation workflows and custom AI-powered business solutions.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies do you use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our stack includes Next.js, React, TypeScript, Node.js, Python, AWS, Azure, PostgreSQL, MongoDB, Docker, Kubernetes and modern AI frameworks.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
