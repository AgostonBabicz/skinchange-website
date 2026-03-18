// Root page — serves as redirect to /da/ for static export (GitHub Pages).
// redirect() doesn't work in output:'export', so we use a meta-refresh + JS redirect.
export const metadata = {
  title: 'SKIND | Online Hudlæge',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://www.skinchange.dk/da/',
  },
};

export default function RootPage() {
  return (
    <html lang="da">
      <head>
        <meta httpEquiv="refresh" content="0; url=/da/" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.replace('/da/');`,
          }}
        />
      </head>
      <body>
        <p>
          Omdirigerer til{' '}
          <a href="/da/">skinchange.dk/da/</a>…
        </p>
      </body>
    </html>
  );
}
