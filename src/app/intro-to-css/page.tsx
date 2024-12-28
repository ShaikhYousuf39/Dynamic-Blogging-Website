import React from "react";
import Link from "next/link";
import { FaCss3Alt } from "react-icons/fa";

const CssPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FaCss3Alt className="text-blue-500 text-6xl" />
          </div>
          <h1 className="text-4xl font-bold">Introduction to CSS</h1>
          <p className="text-gray-300 mt-4">
            Discover how CSS adds style to your web pages and makes them visually appealing.
          </p>
        </header>

        <main className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What is CSS?</h2>
            <p className="text-gray-300 leading-relaxed">
              CSS (Cascading Style Sheets) is used to style and format the layout of web pages. While HTML defines the structure of the page, CSS defines the visual presentation, such as colors, fonts, and spacing. CSS is essential for creating visually appealing and responsive websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features of CSS</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Selectors:</strong> Target specific elements to apply styles, such as <code>div</code>, <code>.class</code>, and <code>#id</code>.
              </li>
              <li>
                <strong>Box Model:</strong> Defines the space around an element, including padding, border, and margin.
              </li>
              <li>
                <strong>Responsive Design:</strong> Use media queries to adapt layouts to different screen sizes.
              </li>
              <li>
                <strong>Transitions & Animations:</strong> Add movement and interactivity to elements.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Use CSS</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To get started with CSS, you can include it in your HTML in three ways:
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li>
                **Inline CSS**: Use the <code>style</code> attribute directly in HTML tags.
                <pre className="bg-gray-700 p-4 rounded mt-2 text-sm">
                  {`<h1 style="color: blue;">Welcome to CSS</h1>`}
                </pre>
              </li>
              <li>
                **Internal CSS**: Define styles inside a <code>&lt;style&gt;</code> block in the HTML document&apos;s <code>&lt;head&gt;</code>.
                <pre className="bg-gray-700 p-4 rounded mt-2 text-sm">
                  {`<style>
  body {
    background-color: #f0f0f0;
  }
</style>`}
                </pre>
              </li>
              <li>
                **External CSS**: Link to an external CSS file using the <code>&lt;link&gt;</code> tag.
                <pre className="bg-gray-700 p-4 rounded mt-2 text-sm">
                  {`<link rel="stylesheet" href="styles.css" />`}
                </pre>
              </li>
            </ol>
            <p className="text-gray-300 leading-relaxed mt-4">
              CSS allows you to style elements with properties like colors, fonts, borders, and layout. Here&apos;s an example of a basic CSS rule:
            </p>
            <pre className="bg-gray-700 p-4 rounded mt-2 text-sm">
              {`h1 {
  color: red;
  font-size: 2rem;
  text-align: center;
}`}
            </pre>
          </section>
        </main>

        <footer className="text-center mt-12">
          <Link href="/" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-all">
              Back to Home
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default CssPage;
