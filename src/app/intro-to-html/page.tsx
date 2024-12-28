import React from "react";
import Link from "next/link";
import { FaHtml5 } from "react-icons/fa";

const HtmlPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FaHtml5 className="text-orange-500 text-6xl" />
          </div>
          <h1 className="text-4xl font-bold">Introduction to HTML</h1>
          <p className="text-gray-300 mt-4">
            Unlock the power of the web with HTML, the backbone of every web
            page.
          </p>
        </header>

        <main className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What is HTML?</h2>
            <p className="text-gray-300 leading-relaxed">
              HTML (HyperText Markup Language) is the standard language used to
              create the structure of web pages. It uses elements and tags to
              define content, such as headings, paragraphs, images, and links.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Key Features of HTML
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Semantic Tags:</strong> Define the purpose of elements,
                like <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>,
                and <code>&lt;article&gt;</code>.
              </li>
              <li>
                <strong>Hyperlinks:</strong> Connect pages using the
                <code>&lt;a&gt;</code> tag.
              </li>
              <li>
                <strong>Forms:</strong> Collect user input with
                <code>&lt;form&gt;</code>, <code>&lt;input&gt;</code>, and
                related elements.
              </li>
              <li>
                <strong>Media Support:</strong> Embed images, videos, and audio
                using <code>&lt;img&gt;</code>, <code>&lt;video&gt;</code>, and
                <code>&lt;audio&gt;</code>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Use HTML</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To get started with HTML, follow these steps:
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li>
                Open a text editor (e.g., VSCode) and create a new file with the
                <code>.html</code> extension.
              </li>
              <li>
                Add a basic structure:
                <pre className="bg-gray-700 p-4 rounded mt-2 text-sm">
                  {`<!DOCTYPE html>
<html>
<head>
  <title>My First HTML Page</title>
</head>
<body>
  <h1>Welcome to HTML</h1>
  <p>This is a paragraph.</p>
</body>
</html>`}
                </pre>
              </li>
              <li>
                Save the file and open it in a browser to see your web page.
              </li>
            </ol>
          </section>
        </main>

        <footer className="text-center mt-12">
          <Link
            href="/"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md transition-all"
          >
            Back to Home
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default HtmlPage;
