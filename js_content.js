export const jsSections = [
    {
        emoji: "🟢",
        label: "Fundamentals",
        color: "#16a34a",
        topics: [
            {
                title: "Variables & Data Types",
                items: [
                    "<code>var</code>, <code>let</code>, <code>const</code> and their differences",
                    "Primitive types: <code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>symbol</code>, <code>bigint</code>",
                    "Type coercion and type checking (<code>typeof</code>)"
                ]
            },
            {
                title: "Operators",
                items: [
                    "Arithmetic operators",
                    "Comparison operators",
                    "Logical operators",
                    "Ternary operator (<code>condition ? a : b</code>)",
                    "Short-circuit evaluation (<code>&&</code>, <code>||</code>, <code>??</code>)"
                ]
            },
            {
                title: "Control Flow",
                items: [
                    "<code>if</code> / <code>else if</code> / <code>else</code>",
                    "<code>switch</code> statements",
                    "<code>for</code> loops",
                    "<code>while</code> loops",
                    "<code>do...while</code> loops",
                    "<code>for...of</code>",
                    "<code>for...in</code>"
                ]
            },
            {
                title: "Functions",
                items: [
                    "Function declarations vs. function expressions",
                    "Arrow functions (<code>=></code>)",
                    "Parameters and arguments",
                    "Default parameter values",
                    "Rest parameters (<code>...args</code>)",
                    "Return values"
                ]
            }
        ]
    },
    {
        emoji: "🔵",
        label: "Core JavaScript",
        color: "#2563eb",
        topics: [
            {
                title: "Arrays",
                items: [
                    "CRUD methods: <code>push</code>, <code>pop</code>, <code>shift</code>, <code>unshift</code>, <code>splice</code>",
                    "Iteration methods: <code>map</code>, <code>filter</code>, <code>reduce</code>, <code>forEach</code>, <code>find</code>, <code>some</code>, <code>every</code>",
                    "Spread operator (<code>...</code>)"
                ]
            },
            {
                title: "Objects",
                items: [
                    "Object literals",
                    "Properties and methods",
                    "Object and array destructuring",
                    "Spread and rest with objects",
                    "The <code>this</code> keyword"
                ]
            },
            {
                title: "Strings",
                items: [
                    "Template literals (<code>`Hello ${name}`</code>)",
                    "<code>split</code>",
                    "<code>trim</code>",
                    "<code>includes</code>",
                    "<code>slice</code>",
                    "<code>replace</code>",
                    "<code>padStart</code>"
                ]
            },
            {
                title: "Scope & Closures",
                items: [
                    "Global scope",
                    "Local (function) scope",
                    "Block scope",
                    "Lexical scope",
                    "Closures and why they matter"
                ]
            },
            {
                title: "Error Handling",
                items: [
                    "<code>try</code> / <code>catch</code> / <code>finally</code>",
                    "<code>throw</code> and custom errors",
                    "Common error types: <code>TypeError</code>, <code>ReferenceError</code>, etc."
                ]
            }
        ]
    },
    {
        emoji: "🟡",
        label: "Intermediate Concepts",
        color: "#ca8a04",
        topics: [
            {
                title: "The DOM (Document Object Model)",
                items: [
                    "Selecting elements (<code>querySelector</code>, <code>getElementById</code>)",
                    "Manipulating content, styles, and attributes",
                    "Creating elements",
                    "Removing elements"
                ]
            },
            {
                title: "Events",
                items: [
                    "<code>addEventListener</code>",
                    "Common event types: click, input, submit, etc.",
                    "Event object (<code>e.target</code>, <code>e.preventDefault()</code>)",
                    "Event bubbling",
                    "Event delegation"
                ]
            },
            {
                title: "Asynchronous JavaScript",
                items: [
                    "The call stack and event loop",
                    "Callbacks and callback hell",
                    "Promises (<code>.then()</code>, <code>.catch()</code>, <code>.finally()</code>)",
                    "<code>async</code> / <code>await</code>",
                    "<code>fetch</code> API for HTTP requests"
                ]
            },
            {
                title: "Modules",
                items: [
                    "<code>import</code> / <code>export</code> (ES Modules)",
                    "Default exports vs. named exports",
                    "Module bundlers (Webpack, Vite — conceptual understanding)"
                ]
            },
            {
                title: "Classes & OOP",
                items: [
                    "Class syntax",
                    "Constructors",
                    "Methods",
                    "Inheritance (<code>extends</code>, <code>super</code>)",
                    "Encapsulation concepts"
                ]
            }
        ]
    },
    {
        emoji: "🔴",
        label: "Advanced Concepts",
        color: "#dc2626",
        topics: [
            {
                title: "Prototypes & the Prototype Chain",
                items: [
                    "How inheritance works under the hood",
                    "<code>Object.create()</code>",
                    "<code>Object.assign()</code>"
                ]
            },
            {
                title: "Functional Programming Patterns",
                items: [
                    "Pure functions and side effects",
                    "Immutability",
                    "Higher-order functions",
                    "Function composition"
                ]
            },
            {
                title: "Advanced Array/Object Techniques",
                items: [
                    "Chaining methods",
                    "Deep vs. shallow copying",
                    "<code>Object.keys()</code>",
                    "<code>Object.values()</code>",
                    "<code>Object.entries()</code>"
                ]
            },
            {
                title: "Iterators & Generators",
                items: [
                    "<code>Symbol.iterator</code>",
                    "<code>function*</code>",
                    "<code>yield</code>"
                ]
            },
            {
                title: "Proxy & Reflect",
                items: [
                    "Intercepting object operations with <code>Proxy</code>",
                    "Using the <code>Reflect</code> API"
                ]
            },
            {
                title: "Memory Management",
                items: [
                    "Garbage collection (basic understanding)",
                    "Memory leaks and common causes"
                ]
            }
        ]
    },
    {
        emoji: "🟠",
        label: "Web-Specific Concepts",
        color: "#ea580c",
        topics: [
            {
                title: "Browser APIs",
                items: [
                    "<code>localStorage</code> and <code>sessionStorage</code>",
                    "<code>setTimeout</code> and <code>setInterval</code>",
                    "History API (routing fundamentals)",
                    "Geolocation API",
                    "Clipboard API",
                    "Notifications API"
                ]
            },
            {
                title: "HTTP & Networking",
                items: [
                    "HTTP methods: GET, POST, PUT, DELETE, PATCH",
                    "Status codes: 200, 404, 500, etc.",
                    "Headers and CORS",
                    "REST principles",
                    "JSON serialization (<code>JSON.stringify</code>, <code>JSON.parse</code>)"
                ]
            },
            {
                title: "Security Basics",
                items: [
                    "XSS (Cross-Site Scripting)",
                    "CSRF",
                    "Content Security Policy (CSP)",
                    "Never trust user input"
                ]
            }
        ]
    }
];