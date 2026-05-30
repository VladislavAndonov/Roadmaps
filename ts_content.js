export const tsSections = [
    {
        emoji: "🟢", label: "Fundamentals", color: "#16a34a",
        topics: [
            { title: "What TypeScript Is", items: ["TypeScript as a superset of JavaScript", "Static typing vs. dynamic typing", "How TypeScript compiles to JavaScript (<code>tsc</code>)", "Why TypeScript: catching errors at compile time, better tooling, self-documenting code"] },
            { title: "Setup & Configuration", items: ["Installing TypeScript (<code>npm install -D typescript</code>)", "<code>tsconfig.json</code> — what it is and key options (<code>target</code>, <code>strict</code>, <code>module</code>, <code>outDir</code>)", "Running TypeScript: <code>tsc</code>, <code>ts-node</code>, <code>tsx</code>", "TypeScript with Vite or modern bundlers (zero-config)"] },
            { title: "Basic Types", items: ["Primitive types: <code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>", "Special types: <code>any</code>, <code>unknown</code>, <code>never</code>, <code>void</code>", "Type annotations: <code>const name: string = 'Alice'</code>", "Type inference — when to annotate vs. let TypeScript infer", "The difference between <code>any</code> (escape hatch) and <code>unknown</code> (safe unknown)"] },
            { title: "Type Aliases", items: ["Defining reusable types with <code>type MyType = ...</code>", "Naming primitives, objects, and combinations", "When to use type aliases early and often"] },
        ]
    },
    {
        emoji: "🔵", label: "Core Type System", color: "#2563eb",
        topics: [
            { title: "Interfaces", items: ["Defining object shapes with <code>interface</code>", "Optional properties (<code>name?: string</code>) and readonly properties (<code>readonly id: number</code>)", "Extending interfaces (<code>interface Admin extends User</code>)", "Interface vs. <code>type</code> alias — when each is preferred", "Declaration merging (a unique interface feature)"] },
            { title: "Union & Intersection Types", items: ["Union types (<code>string | number</code>) — a value that can be one of several types", "Intersection types (<code>TypeA & TypeB</code>) — combining types", "Discriminated unions — a pattern for type-safe variants", "Literal types (<code>'left' | 'right' | 'center'</code>)"] },
            { title: "Arrays & Tuples", items: ["Typed arrays: <code>string[]</code> vs. <code>Array&lt;string&gt;</code>", "Tuples: fixed-length arrays with known types (<code>[string, number]</code>)", "Rest elements in tuples", "Readonly arrays and tuples"] },
            { title: "Enums", items: ["Numeric enums and string enums", "<code>const enum</code> for zero-cost abstractions", "When to use enums vs. union literal types (a common debate)"] },
            { title: "Functions in TypeScript", items: ["Typing parameters and return values", "Optional and default parameters", "Rest parameters with types", "Function type signatures and <code>type</code> aliases for functions", "Overloads — multiple signatures for one function", "<code>void</code> vs. <code>never</code> return types"] },
        ]
    },
    {
        emoji: "🟡", label: "Generics & Narrowing", color: "#ca8a04",
        topics: [
            { title: "Generics", items: ["What generics are and why they matter (<code>function identity&lt;T&gt;(arg: T): T</code>)", "Generic functions, interfaces, and classes", "Constraints: <code>&lt;T extends object&gt;</code> to restrict type parameters", "Multiple type parameters (<code>&lt;T, U&gt;</code>)", "Default type parameters (<code>&lt;T = string&gt;</code>)", "Common generic patterns: <code>Array&lt;T&gt;</code>, <code>Promise&lt;T&gt;</code>, <code>Record&lt;K, V&gt;</code>"] },
            { title: "Type Narrowing", items: ["<code>typeof</code> guards (<code>if (typeof x === 'string')</code>)", "<code>instanceof</code> guards for class instances", "<code>in</code> operator for checking property existence", "Truthiness narrowing", "Discriminated union narrowing", "Type predicates: <code>function isString(x: unknown): x is string</code>", "Exhaustive checks with <code>never</code>"] },
            { title: "Utility Types", items: ["<code>Partial&lt;T&gt;</code> — make all properties optional", "<code>Required&lt;T&gt;</code> — make all properties required", "<code>Readonly&lt;T&gt;</code> — make all properties readonly", "<code>Pick&lt;T, K&gt;</code> — keep a subset of properties", "<code>Omit&lt;T, K&gt;</code> — remove a subset of properties", "<code>Record&lt;K, V&gt;</code> — construct an object type with known keys", "<code>Exclude&lt;T, U&gt;</code> and <code>Extract&lt;T, U&gt;</code> — filter union types", "<code>ReturnType&lt;T&gt;</code> and <code>Parameters&lt;T&gt;</code> — extract function metadata", "<code>NonNullable&lt;T&gt;</code> — remove null and undefined"] },
            { title: "Assertions & Const", items: ["Type assertions: <code>value as string</code> (and when NOT to use them)", "Non-null assertion operator (<code>value!</code>) — use sparingly", "<code>as const</code> — freeze literal values to their narrowest type", "Satisfies operator (<code>satisfies Type</code>) — validate without widening"] },
        ]
    },
    {
        emoji: "🔴", label: "Advanced Types", color: "#dc2626",
        topics: [
            { title: "Mapped Types", items: ["Transforming every property in a type: <code>{ [K in keyof T]: ... }</code>", "Adding/removing modifiers (<code>+readonly</code>, <code>-readonly</code>, <code>+?</code>, <code>-?</code>)", "Key remapping with <code>as</code>", "How built-in utility types like <code>Partial</code> and <code>Readonly</code> are implemented"] },
            { title: "Conditional Types", items: ["Basic syntax: <code>T extends U ? X : Y</code>", "Distributive conditional types over unions", "The <code>infer</code> keyword — extract a type from within another type", "Building advanced utilities with conditional types"] },
            { title: "Template Literal Types", items: ["Constructing string types: <code>`on${Capitalize&lt;Event&gt;}`</code>", "Combining with unions to generate permutations", "Practical uses: event handler names, CSS properties, API endpoints"] },
            { title: "Index Signatures & keyof", items: ["Index signatures: <code>{ [key: string]: number }</code>", "<code>keyof T</code> — the union of all keys of a type", "<code>T[K]</code> — indexed access types (lookup types)", "Combining <code>keyof</code> and generics for type-safe property access"] },
            { title: "Recursive & Complex Types", items: ["Recursive type aliases (e.g. JSON-compatible types)", "Deep <code>Readonly</code> and deep <code>Partial</code> implementations", "Understanding circular reference limits"] },
        ]
    },
    {
        emoji: "🟠", label: "TypeScript in Practice", color: "#ea580c",
        topics: [
            { title: "Classes with TypeScript", items: ["Access modifiers: <code>public</code>, <code>private</code>, <code>protected</code>, <code>readonly</code>", "Parameter properties shorthand (<code>constructor(private name: string)</code>)", "Abstract classes and abstract methods", "Implementing interfaces with <code>implements</code>", "Static members with types"] },
            { title: "Modules & Declaration Files", items: ["ES Module <code>import</code>/<code>export</code> with types", "Type-only imports: <code>import type { User } from './types'</code>", "Declaration files (<code>.d.ts</code>) — what they are and when you write them", "Ambient declarations: <code>declare module</code>, <code>declare global</code>", "Module augmentation — adding types to third-party modules"] },
            { title: "TypeScript with React", items: ["Typing component props with interfaces", "<code>React.FC</code> vs. plain function components (modern preference)", "Typing <code>useState</code>, <code>useRef</code>, <code>useReducer</code>", "Typing event handlers (<code>React.ChangeEvent&lt;HTMLInputElement&gt;</code>)", "Generic components", "Children types (<code>React.ReactNode</code> vs. <code>React.ReactElement</code>)", "Typing <code>useContext</code> and creating typed contexts"] },
            { title: "TypeScript with Node.js", items: ["Installing <code>@types/node</code>", "Typing Express routes and middleware", "Working with environment variables safely", "Typing database results (e.g. Prisma, Drizzle for fully-typed queries)"] },
            { title: "Third-party Types", items: ["<code>@types/*</code> packages — DefinitelyTyped", "Libraries with built-in types vs. needing <code>@types/</code>", "Working with libraries that have no types (writing shims)"] },
        ]
    },
    {
        emoji: "⚙️", label: "Tooling & Ecosystem", color: "#4b5563",
        topics: [
            { title: "tsconfig.json Deep Dive", items: ["<code>strict</code> mode — enables all strict checks (always use this)", "<code>target</code> — what JS version to compile to", "<code>module</code> & <code>moduleResolution</code> — how modules are resolved", "<code>paths</code> — path aliases (e.g. <code>@/components/...</code>)", "<code>lib</code> — what built-in APIs TypeScript knows about", "<code>include</code> / <code>exclude</code> / <code>files</code>", "Project references for monorepos"] },
            { title: "Developer Tooling", items: ["<code>ts-node</code> and <code>tsx</code> — run TypeScript directly without compiling", "ESLint with <code>@typescript-eslint</code> — linting TypeScript code", "TypeScript language server — what powers IDE autocomplete", "Checking types without emitting: <code>tsc --noEmit</code>"] },
            { title: "Working with Unknown Data", items: ["Validating API responses with <code>unknown</code> + narrowing", "Runtime validation libraries: Zod, Valibot, Yup", "Generating TypeScript types from JSON schemas or OpenAPI specs", "Type-safe environment variables (e.g. <code>t3-env</code>)"] },
            { title: "Patterns & Best Practices", items: ["Prefer <code>unknown</code> over <code>any</code> — force explicit handling", "Avoid type assertions; fix the types instead", "Keep types close to data — co-locate, don't centralize everything", "Use discriminated unions over boolean flags", "Make impossible states unrepresentable", "Const enums vs. as-const objects — the ongoing debate"] },
        ]
    },
];