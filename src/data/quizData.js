export const quizData = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyperlinking Text Marking Language"
    ],
    correctAnswer: [0],
    type: "single"
  },
  {
    id: 2,
    question: "Which tag is used to create a link in HTML?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correctAnswer: [0],
    type: "single"
  },
  {
    id: 3,
    question: "Which HTML element is used to define the largest heading?",
    options: ["<h1>", "<head>", "<heading>", "<h6>"],
    correctAnswer: [0],
    type: "single"
  },
  {
    id: 4,
    question: "Which attribute is used to provide a unique identifier to an HTML element?",
    options: ["class", "id", "name", "key"],
    correctAnswer: [1],
    type: "single"
  },
  {
    id: 5,
    question: "What are the valid HTML5 semantic elements? (Select all that apply)",
    options: ["<article>", "<section>", "<div>", "<footer>"],
    correctAnswer: [0, 1, 3],
    type: "multi"
  },
  {
    id: 6,
    question: "What is JSX in React?",
    options: [
      "A templating engine",
      "A syntax extension to JavaScript",
      "A CSS framework",
      "A React component"
    ],
    correctAnswer: [1],
    type: "single"
  },
  {
    id: 7,
    question: "Which hook is used for managing state in functional React components?",
    options: ["useEffect", "useState", "useContext", "useReducer"],
    correctAnswer: [1],
    type: "single"
  },
  {
    id: 8,
    question: "What method is used to render React components to the DOM?",
    options: ["React.render()", "ReactDOM.render()", "renderComponent()", "React.mount()"],
    correctAnswer: [1],
    type: "single"
  },
  {
    id: 9,
    question: "How do you pass data from a parent to a child component in React?",
    options: ["State", "Props", "Refs", "Hooks"],
    correctAnswer: [1],
    type: "single"
  },
  {
    id: 10,
    question: "Which of these are React lifecycle methods? (Select all that apply)",
    options: [
      "componentDidMount",
      "useEffect",
      "render",
      "componentWillUpdate"
    ],
    correctAnswer: [0, 2, 3],
    type: "multi"
  },
  {
    id: 11,
    question: "What is the purpose of keys in React lists?",
    options: [
      "To uniquely identify elements for efficient rendering",
      "To bind events",
      "To style the elements",
      "To store data"
    ],
    correctAnswer: [0],
    type: "single"
  },
  {
    id: 12,
    question: "Which command is used to create a new React app?",
    options: [
      "npm create react-app",
      "npx create-react-app",
      "npm init react-app",
      "npx react-new-app"
    ],
    correctAnswer: [1],
    type: "single"
  },
  {
    id: 13,
    question: "Which of the following are ways to style React components? (Select all that apply)",
    options: ["CSS Modules", "Inline styles", "Sass", "JavaScript objects"],
    correctAnswer: [0, 1, 2, 3],
    type: "multi"
  },
  {
    id: 14,
    question: "How do you handle events in React?",
    options: [
      "Using HTML event attributes",
      "Using camelCase syntax and passing functions",
      "Using jQuery event handlers",
      "Directly modifying DOM events"
    ],
    correctAnswer: [1],
    type: "single"
  },
  {
    id: 15,
    question: "Which React hook is used to perform side effects in functional components?",
    options: ["useState", "useEffect", "useMemo", "useCallback"],
    correctAnswer: [1],
    type: "single"
  },
  {
    type: "fill",
    question: "Node.js is built on the ______ JavaScript engine.",
  },
  {
    type: "truefalse",
    question: "Node.js can run JavaScript code outside the browser.",
  },
  {
    type: "fill",
    question: "The package manager used with Node.js is called ______.",
  },
  {
    type: "truefalse",
    question: "Node.js is single-threaded but supports asynchronous programming.",
  },
  {
    type: "fill",
    question: "The core module used to work with the file system is called ______.",
  },
  {
    type: "truefalse",
    question: "You can use Node.js to build web servers.",
  },
  {
    type: "fill",
    question: "The command to initialize a new Node.js project is `npm ______`.",
  },
  {
    type: "truefalse",
    question: "Node.js uses the Chrome V8 engine to execute code.",
  },
];
