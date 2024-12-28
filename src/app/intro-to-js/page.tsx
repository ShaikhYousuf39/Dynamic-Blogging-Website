import React from "react";
import { FaJsSquare } from "react-icons/fa";
import Link from "next/link";

const JavaScriptPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FaJsSquare className="text-yellow-500 text-6xl" />
          </div>
          <h1 className="text-4xl font-bold">Introduction to JavaScript</h1>
          <p className="text-gray-300 mt-4">
            JavaScript brings interactivity to web pages, making them dynamic and engaging.
          </p>
        </header>

        <main className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What is JavaScript?</h2>
            <p className="text-gray-300 leading-relaxed">
              JavaScript is a versatile programming language used to create dynamic and interactive effects within web browsers. It allows you to implement complex features such as forms, animations, data validation, and much more. JavaScript can run on both the client-side (in the browser) and server-side (with Node.js).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features of JavaScript</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Event-driven programming:</strong> JavaScript can listen for user interactions like clicks and keypresses to trigger actions on the web page.
              </li>
              <li>
                <strong>DOM Manipulation:</strong> JavaScript allows you to interact with HTML elements, changing their content, style, and structure.
              </li>
              <li>
                <strong>Asynchronous Programming:</strong> JavaScript can handle tasks asynchronously using promises, async/await, and callbacks, making web pages faster and more responsive.
              </li>
              <li>
                <strong>Cross-platform:</strong> JavaScript runs on all major browsers and can also be used on the server side with Node.js.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Use JavaScript</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              JavaScript can be added to a web page in three main ways:
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li>
                **Inline JavaScript**: Directly add JavaScript inside an HTML element using the <code>onclick</code> or other event attributes.
                <pre className="bg-gray-700 p-4 rounded mt-2 text-sm">
                  {`<button onclick="alert('Hello, World!')">Click Me</button>`}
                </pre>
              </li>
              <li>
                **Internal JavaScript**: Embed JavaScript in a <code>&lt;script&gt;</code> tag within the HTML document, typically inside the <code>&lt;head&gt;</code> or before the closing <code>&lt;/body&gt;</code> tag.
                <pre className="bg-gray-700 p-4 rounded mt-2 text-sm">
                  {`<script>
  alert('Hello, World!');
</script>`}
                </pre>
              </li>
              <li>
                **External JavaScript**: Link to an external JavaScript file using the <code>&lt;script&gt;</code> tag in the HTML document.
                <pre className="bg-gray-700 p-4 rounded mt-2 text-sm">
                  {`<script src="script.js"></script>`}
                </pre>
              </li>
            </ol>
            <p className="text-gray-300 leading-relaxed mt-4">
              Here’s a simple example of JavaScript in action:
            </p>
            <pre className="bg-gray-700 p-4 rounded mt-2 text-sm">
              {`<button id="myBtn">Click me</button>
<script>
  document.getElementById("myBtn").onclick = function() {
    alert("Hello, World!");
  }
</script>`}
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

export default JavaScriptPage;
