import { SiNextdotjs} from "react-icons/si";
import Link from "next/link";

const NextjsPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <SiNextdotjs className="text-green-400 text-6xl" />
          </div>
          <h1 className="text-4xl font-bold">Introduction to Next.js</h1>
          <p className="text-gray-300 mt-4">
            Next.js is a powerful React framework for building fast and SEO-friendly web applications. It provides server-side rendering, static site generation, and many other features out of the box.
          </p>
        </header>

        <main className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What is Next.js?</h2>
            <p className="text-gray-300 leading-relaxed">
              Next.js is a React framework that enables developers to build scalable and optimized web applications. It allows you to easily create server-rendered pages, static sites, and full-stack applications. With Next.js, you can take advantage of features like automatic code splitting, optimized performance, and improved SEO.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features of Next.js</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Server-side Rendering (SSR):</strong> Pages are rendered on the server for better performance and SEO.
              </li>
              <li>
                <strong>Static Site Generation (SSG):</strong> Build static pages at build time for fast loading and improved SEO.
              </li>
              <li>
                <strong>API Routes:</strong> You can create API endpoints within your Next.js app for server-side logic.
              </li>
              <li>
                <strong>File-based Routing:</strong> Create pages by simply adding files to the `pages` directory.
              </li>
              <li>
                <strong>Image Optimization:</strong> Automatically optimizes images to improve performance.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Use Next.js</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To get started with Next.js, you can create a new project using the following command:
            </p>
            <pre className="bg-gray-700 p-4 rounded text-white mb-4 text-sm">
              {`npx create-next-app my-next-app`}
            </pre>
            <p className="text-gray-300 leading-relaxed mb-4">
              After setting up the project, you can start the development server by running:
            </p>
            <pre className="bg-gray-700 p-4 rounded text-white mb-4 text-sm">
              {`npm run dev`}
            </pre>
            <p className="text-gray-300 leading-relaxed mb-4">
              Here’s how Next.js works in terms of routing: The pages you create inside the `pages` folder are automatically routed. For example, `pages/index.tsx` corresponds to the homepage (`/`), and `pages/about.tsx` corresponds to `/about`.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Next.js also supports server-side rendering, static site generation, and client-side rendering (CSR). By using `getServerSideProps` or `getStaticProps`, you can fetch data server-side before rendering a page, and Next.js will handle the logic automatically.
            </p>
          </section>
        </main>

        <footer className="text-center mt-12">
          <Link href="/" passHref  className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-all">
              Back to Home
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default NextjsPage;
