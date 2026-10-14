import Script from "next/script";

// Same tags as `GoogleAnalytics` from @next/third-parties/google, which can't
// be used with vinext: it requires `next` as a peer dependency, and vinext
// can't create a client reference for its CommonJS "use client" module.
export function GoogleAnalytics({ gaId }: { gaId: string }) {
  return (
    <>
      <Script
        id="_next-ga-init"
        dangerouslySetInnerHTML={{
          __html: `
          window['dataLayer'] = window['dataLayer'] || [];
          function gtag(){window['dataLayer'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}');`,
        }}
      />
      <Script
        id="_next-ga"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
    </>
  );
}
