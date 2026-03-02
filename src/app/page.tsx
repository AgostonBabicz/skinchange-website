// For GitHub Pages with basePath, render Danish content at root
// English version is at /en/index.html (built as static)
import HomePage from './[lang]/page';

export default function RootPage() {
  // Render Danish content at root
  return <HomePage params={{ lang: 'da' }} />;
}
