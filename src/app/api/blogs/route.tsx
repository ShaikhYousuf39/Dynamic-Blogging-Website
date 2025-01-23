import { NextResponse } from "next/server";

export const GET = async () => {
  const blogs: {
    id: number;
    icon: string;
    title: string;
    headline: string;
    mainPurpose: string;
    keyFeatures: string[];
    howToUse: string;
  }[] = [
    {
      id: 1,
      icon: "https://example.com/icons/html-icon.png",
      title: "HTML",
      headline: "The Building Block of Web Development",
      mainPurpose:
        "To structure web content and define the meaning of elements on a webpage.",
      keyFeatures: [
        "Standard markup language for web pages",
        "Supports multimedia integration",
        "Extensible with semantic tags",
        "Foundation for web technologies like CSS and JavaScript",
      ],
      howToUse:
        "Learn the basic tags and attributes, structure content with semantic tags, and use it as the backbone of your web projects.",
    },
    {
      id: 2,
      icon: "https://example.com/icons/css-icon.png",
      title: "CSS",
      headline: "Styling the Web",
      mainPurpose:
        "To add styles, layouts, and designs to web pages for enhanced user experience.",
      keyFeatures: [
        "Separation of content and presentation",
        "Responsive design with media queries",
        "Animations and transitions",
        "Grid and Flexbox for layout management",
      ],
      howToUse:
        "Apply styles using external, internal, or inline stylesheets, and leverage CSS frameworks for rapid development.",
    },
    {
      id: 3,
      icon: "https://example.com/icons/js-icon.png",
      title: "JavaScript",
      headline: "The Heart of Web Interactivity",
      mainPurpose:
        "To make web pages dynamic and interactive by adding behaviors to HTML elements.",
      keyFeatures: [
        "Client-side scripting",
        "Asynchronous programming with promises and async/await",
        "Manipulating DOM elements dynamically",
        "Wide range of libraries and frameworks",
      ],
      howToUse:
        "Write scripts directly in HTML files using <script> tags, or link external .js files to add interactivity.",
    },
    {
      id: 4,
      icon: "https://example.com/icons/react-icon.png",
      title: "React",
      headline: "A Library for Building User Interfaces",
      mainPurpose:
        "To create reusable UI components and manage application state efficiently.",
      keyFeatures: [
        "Component-based architecture",
        "Virtual DOM for efficient rendering",
        "Hooks for managing state and lifecycle",
        "Rich ecosystem with community support",
      ],
      howToUse:
        "Start a project using Create React App or Vite, write components in JSX, and manage state with React hooks.",
    },
    {
      id: 5,
      icon: "https://example.com/icons/nextjs-icon.png",
      title: "Next.js",
      headline: "The React Framework for Production",
      mainPurpose:
        "To build server-rendered or statically generated React applications with ease.",
      keyFeatures: [
        "Built-in routing with file-based structure",
        "API routes for backend logic",
        "Static and server-side rendering",
        "Optimized performance and SEO capabilities",
      ],
      howToUse:
        "Install Next.js, structure pages in the `pages` or `app` directory, and use built-in features like API routes and dynamic routing.",
    },
    {
      id: 6,
      icon: "https://example.com/icons/tailwind-icon.png",
      title: "Tailwind CSS",
      headline: "Utility-First CSS Framework",
      mainPurpose:
        "To design modern and responsive UIs using utility classes directly in markup.",
      keyFeatures: [
        "Highly customizable with configuration",
        "Responsive design out of the box",
        "No need to write custom CSS",
        "Rapid prototyping and development",
      ],
      howToUse:
        "Add Tailwind to your project via npm or CDN, and use utility classes in your HTML or JSX files for styling.",
    },
  ];
  return NextResponse.json({ data: blogs }, { status: 200 });
};
