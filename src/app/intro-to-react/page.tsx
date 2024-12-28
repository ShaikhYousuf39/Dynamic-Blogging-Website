import React from "react";
import { FaReact } from "react-icons/fa";
import Link from "next/link";

const ReactPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <FaReact className="text-cyan-400 text-6xl" />
          </div>
          <h1 className="text-4xl font-bold">Introduction to React</h1>
          <p className="text-gray-300 mt-4">
            React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently.
          </p>
        </header>

        <main className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What is React?</h2>
            <p className="text-gray-300 leading-relaxed">
              React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It allows you to build complex UIs by composing small, isolated components. React is maintained by Facebook and a community of developers. It is used for building single-page applications (SPAs) and can be integrated with other libraries or frameworks.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Key Features of React</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Component-based architecture:</strong> React applications are built using small, reusable components, which helps in organizing and maintaining code.
              </li>
              <li>
                <strong>Virtual DOM:</strong> React uses a virtual DOM to efficiently update the user interface, ensuring faster rendering and better performance.
              </li>
              <li>
                <strong>Unidirectional Data Flow:</strong> Data in React flows from parent components to child components, making state management predictable and easier to debug.
              </li>
              <li>
                <strong>React Hooks:</strong> React introduced hooks to enable state and lifecycle management in functional components, simplifying code and enhancing functionality.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Use React</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              To get started with React, you need to install it using a package manager like npm or yarn. You can either set up a new project using Create React App or manually configure React in your project.
            </p>
            <ol className="list-decimal list-inside text-gray-300 space-y-2">
              <li>
                **Install React**: If you are setting up a project from scratch, use Create React App:
                <pre className="bg-gray-700 p-4 rounded mt-2 text-sm">
                  {`npx create-react-app my-app`}
                </pre>
              </li>
              <li>
                **Create Components**: In React, you create components as JavaScript functions that return JSX (JavaScript XML). JSX looks like HTML but is used inside JavaScript.
                <pre className="bg-gray-700 p-4 rounded mt-2 text-sm">
                  {`function App() {
  return <h1>Hello, React!</h1>;
}`}
                </pre>
              </li>
              <li>
                **Using React Hooks**: Use hooks like <code>useState</code> and <code>useEffect</code> for managing state and side-effects in functional components.
                <pre className="bg-gray-700 p-4 rounded mt-2 text-sm">
                  {`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}`}
                </pre>
              </li>
            </ol>
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

export default ReactPage;
