import { FC } from "react";
import { SiTailwindcss } from "react-icons/si";
import Link from "next/link";

const TailwindPage: FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <SiTailwindcss className="text-blue-500 text-6xl" />
          </div>
          <h1 className="text-4xl font-bold">Introduction to Tailwind CSS</h1>
          <p className="text-gray-300 mt-4">
            Tailwind CSS is a utility-first CSS framework that allows developers to quickly build custom designs without writing custom CSS. It provides low-level utility classes that can be combined to create unique designs.
          </p>
        </header>

        <main className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What is Tailwind CSS?</h2>
            <p className="text-gray-300 leading-relaxed">
              Tailwind CSS is a utility-first CSS framework for creating custom designs directly in your HTML. Unlike traditional CSS frameworks like Bootstrap, Tailwind doesn&apos;t provide predefined components. Instead, it offers low-level utility classes that you can use to style your elements.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This approach allows you to create a design that is tailored to your needs without overriding existing styles. You can build complex, responsive designs with ease by combining these utility classes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Why Use Tailwind CSS?</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Utility-First:</strong> Provides low-level utility classes, so you can style elements directly without writing custom CSS.
              </li>
              <li>
                <strong>Customizable:</strong> Tailwind is highly customizable. You can configure it to match your design needs by editing the `tailwind.config.js` file.
              </li>
              <li>
                <strong>Responsive Design:</strong> Tailwind makes building responsive layouts easy with its built-in responsive utilities.
              </li>
              <li>
                <strong>Performance Optimized:</strong> It uses PurgeCSS to remove unused CSS classes, ensuring your final CSS file is small and optimized.
              </li>
              <li>
                <strong>Rapid Prototyping:</strong> Tailwind&apos;s utility-first approach allows you to quickly prototype your designs without needing to write custom CSS.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Use Tailwind CSS</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To get started with Tailwind CSS in a Next.js project, follow these steps:
            </p>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">Step 1: Install Tailwind CSS</h3>
            <pre className="bg-gray-700 p-4 rounded text-white mb-4 text-sm">
              {`npm install tailwindcss postcss autoprefixer`}
            </pre>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">Step 2: Create Tailwind Config File</h3>
            <pre className="bg-gray-700 p-4 rounded text-white mb-4 text-sm">
              {`npx tailwindcss init`}
            </pre>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">Step 3: Configure Tailwind in your CSS</h3>
            <pre className="bg-gray-700 p-4 rounded text-white mb-4 text-sm">
              {`/* ./styles/globals.css */ 
@tailwind base;
@tailwind components;
@tailwind utilities;`}
            </pre>
            <p className="text-gray-300 leading-relaxed mb-4">
              After installing and configuring Tailwind CSS, you can start using its utility classes in your HTML files or React components.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Example of Tailwind CSS</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Here&apos;s an example of a button styled using Tailwind CSS classes:
            </p>
            <div className="bg-gray-700 p-4 rounded-lg mb-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-all duration-300">
                Tailwind Styled Button
              </button>
            </div>
            <p className="text-gray-300 leading-relaxed">
              As you can see, we are using Tailwind&apos;s utility classes directly on the button element, such as `bg-blue-500`, `hover:bg-blue-600`, and `text-white`. This allows for rapid and custom styling without writing any CSS.
            </p>
          </section>
        </main>

        <footer className="text-center mt-12">
          <Link href="/" passHref className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-all">
              Back to Home
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default TailwindPage;
