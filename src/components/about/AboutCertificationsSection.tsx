import { certificationsAndExpertise } from "./aboutData";

const monthToIndex: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

function issuedToSortValue(issued: string): number {
  const [month, year] = issued.split(" ");
  const monthIndex = monthToIndex[month] ?? 0;
  const numericYear = Number(year) || 0;

  return numericYear * 12 + monthIndex;
}

export function AboutCertificationsSection() {
  const sortedCertifications = [...certificationsAndExpertise].sort(
    (a, b) => issuedToSortValue(b.issued) - issuedToSortValue(a.issued)
  );

  const groupedByIssuer = sortedCertifications.reduce((accumulator, certification) => {
    if (!accumulator[certification.issuer]) {
      accumulator[certification.issuer] = [];
    }
    accumulator[certification.issuer].push(certification);
    return accumulator;
  }, {} as Record<string, typeof sortedCertifications>);

  const issuers = Object.keys(groupedByIssuer).sort((issuerA, issuerB) => {
    const latestA = groupedByIssuer[issuerA][0];
    const latestB = groupedByIssuer[issuerB][0];
    return issuedToSortValue(latestB.issued) - issuedToSortValue(latestA.issued);
  });

  return (
    <section className="py-12 border-y border-slate-800/60 bg-slate-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Certified <span className="text-primary">and</span> Specialized
          </h2>
          <p className="text-slate-400 mt-3">Our certifications and credentials across Salesforce, AWS, Google Cloud, Microsoft, and Boomi ecosystems.</p>
        </div>

        <div className="space-y-10">
          {issuers.map((issuer) => (
            <div key={issuer} className="space-y-4">
              <div className="sticky top-20 z-20 -mx-2 px-2 py-2 flex items-center gap-3 bg-slate-950/85 backdrop-blur border-y border-slate-800/70 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-100">{issuer}</h3>
                <span className="text-xs px-2.5 py-1 rounded-full border border-slate-700 text-slate-300 bg-slate-800/60">
                  {groupedByIssuer[issuer].length} certifications
                </span>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {groupedByIssuer[issuer].map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-sm p-5 flex flex-col gap-4"
                  >
                    <div className="flex h-24 items-center justify-center rounded-xl border border-slate-800/70 bg-slate-950/30 p-3">
                      <img
                        src={item.src}
                        alt={`${item.name} logo`}
                        className="h-16 w-36 object-contain opacity-95"
                        loading="lazy"
                      />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-slate-100 leading-snug">{item.name}</h4>
                      <p className="text-xs text-slate-400">Issued {item.issued}</p>
                      {item.credentialId ? (
                        <p className="text-xs text-slate-400">Credential ID {item.credentialId}</p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
