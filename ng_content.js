export const ngSections = [
    {
        emoji: "🟢",
        label: "Fundamentals",
        color: "#16a34a",
        topics: [
            {
                title: "What Angular Is",
                items: [
                    "Angular as a full opinionated framework (vs. React/Vue as libraries)",
                    "Angular CLI — the backbone of every Angular project",
                    "How Angular compiles: JIT (development) vs. AOT (production)",
                    "Angular versioning — understanding the release cadence (Angular 2+ vs. AngularJS)",
                    "The role of TypeScript in Angular — it's not optional",
                ],
            },
            {
                title: "Project Setup & CLI",
                items: [
                    "Installing the CLI: <code>npm install -g @angular/cli</code>",
                    "Creating a project: <code>ng new my-app</code> and the options it asks",
                    "Running the dev server: <code>ng serve</code>",
                    "CLI generators: <code>ng generate component</code>, <code>ng generate service</code>, etc.",
                    "Building for production: <code>ng build</code>",
                    "Understanding the generated project structure (<code>src/app</code>, <code>angular.json</code>, <code>main.ts</code>)",
                ],
            },
            {
                title: "Components",
                items: [
                    "What a component is: the basic building block of Angular UI",
                    "The <code>@Component</code> decorator: <code>selector</code>, <code>templateUrl</code>, <code>styleUrls</code>",
                    "Inline templates and styles vs. separate files",
                    "Component lifecycle overview (just awareness at this stage)",
                    "How Angular renders components into the DOM via selectors",
                ],
            },
            {
                title: "Templates & Data Binding",
                items: [
                    "Interpolation: <code>{{ expression }}</code>",
                    "Property binding: <code>[property]=\"value\"</code>",
                    "Event binding: <code>(event)=\"handler()\"</code>",
                    "Two-way binding: <code>[(ngModel)]</code> and the <code>FormsModule</code> requirement",
                    "Attribute vs. property binding — understanding the difference",
                ],
            },
        ],
    },
    {
        emoji: "🔵",
        label: "Core Angular",
        color: "#2563eb",
        topics: [
            {
                title: "Directives",
                items: [
                    "Built-in structural directives: <code>*ngIf</code>, <code>*ngFor</code>, <code>*ngSwitch</code>",
                    "Built-in attribute directives: <code>ngClass</code>, <code>ngStyle</code>",
                    "The new control flow syntax (Angular 17+): <code>@if</code>, <code>@for</code>, <code>@switch</code>",
                    "Creating custom attribute directives with <code>@Directive</code>",
                    "<code>ng-template</code>, <code>ng-container</code>, and <code>ng-content</code> (projection)",
                ],
            },
            {
                title: "Component Communication",
                items: [
                    "Passing data down with <code>@Input()</code>",
                    "Emitting events up with <code>@Output()</code> and <code>EventEmitter</code>",
                    "The new <code>input()</code> and <code>output()</code> signal-based APIs (Angular 17+)",
                    "Template reference variables (<code>#myRef</code>) and <code>@ViewChild</code>",
                    "Content projection with <code>ng-content</code> and named slots",
                ],
            },
            {
                title: "Pipes",
                items: [
                    "What pipes are: transforming displayed values in templates",
                    "Built-in pipes: <code>date</code>, <code>currency</code>, <code>uppercase</code>, <code>lowercase</code>, <code>json</code>, <code>async</code>",
                    "Chaining pipes",
                    "Creating custom pipes with <code>@Pipe</code>",
                    "Pure vs. impure pipes — the performance implications",
                ],
            },
            {
                title: "Services & Dependency Injection",
                items: [
                    "What services are: logic that lives outside of components",
                    "The <code>@Injectable</code> decorator and <code>providedIn: 'root'</code>",
                    "Injecting a service into a component via the constructor",
                    "How Angular's DI tree works (root, component-level providers)",
                    "The difference between a singleton service and a component-scoped service",
                ],
            },
            {
                title: "Modules (NgModules)",
                items: [
                    "What <code>NgModule</code> is: declarations, imports, exports, providers",
                    "<code>AppModule</code> as the root module",
                    "Feature modules for organizing code",
                    "Shared modules for reusable components/pipes",
                    "Understanding standalone components (Angular 14+) as the modern alternative",
                    "Migrating from NgModules to standalone: the current Angular direction",
                ],
            },
        ],
    },
    {
        emoji: "🟡",
        label: "Routing & Forms",
        color: "#ca8a04",
        topics: [
            {
                title: "Angular Router",
                items: [
                    "Setting up <code>RouterModule</code> with routes (<code>path</code>, <code>component</code>)",
                    "<code>&lt;router-outlet&gt;</code> — where routed components render",
                    "Navigation: <code>routerLink</code> directive and the <code>Router</code> service (<code>router.navigate()</code>)",
                    "Route parameters (<code>:id</code>) and reading them with <code>ActivatedRoute</code>",
                    "Query parameters and fragment navigation",
                    "Nested/child routes",
                    "Wildcard routes and 404 pages",
                ],
            },
            {
                title: "Route Guards & Lazy Loading",
                items: [
                    "<code>CanActivate</code> — protecting routes (auth guards)",
                    "<code>CanDeactivate</code> — preventing navigation away from dirty forms",
                    "<code>Resolve</code> — pre-fetching data before a route activates",
                    "Lazy loading feature modules: <code>loadChildren</code>",
                    "Lazy loading standalone components: <code>loadComponent</code>",
                    "Preloading strategies for performance",
                ],
            },
            {
                title: "Template-Driven Forms",
                items: [
                    "Using <code>FormsModule</code> and <code>ngModel</code>",
                    "Accessing form state: <code>valid</code>, <code>dirty</code>, <code>touched</code>",
                    "Built-in validators: <code>required</code>, <code>minlength</code>, <code>email</code>",
                    "Showing validation messages in templates",
                    "When to use template-driven vs. reactive forms",
                ],
            },
            {
                title: "Reactive Forms",
                items: [
                    "<code>ReactiveFormsModule</code>, <code>FormControl</code>, <code>FormGroup</code>, <code>FormArray</code>",
                    "Building forms with <code>FormBuilder</code>",
                    "Built-in and custom validators",
                    "Async validators (e.g. checking username availability)",
                    "Listening to value changes with <code>valueChanges</code> observable",
                    "Typed reactive forms (Angular 14+) — <code>FormControl&lt;string&gt;</code>",
                ],
            },
        ],
    },
    {
        emoji: "🔴",
        label: "Reactivity & State",
        color: "#dc2626",
        topics: [
            {
                title: "RxJS Essentials",
                items: [
                    "What RxJS is: observables as Angular's core async primitive",
                    "Observable vs. Promise — key mental model differences",
                    "Creating observables: <code>of()</code>, <code>from()</code>, <code>interval()</code>",
                    "Subscribing and unsubscribing — the memory leak trap",
                    "Core operators: <code>map</code>, <code>filter</code>, <code>tap</code>, <code>take</code>, <code>switchMap</code>, <code>mergeMap</code>, <code>catchError</code>, <code>debounceTime</code>, <code>distinctUntilChanged</code>",
                    "The <code>async</code> pipe — the preferred way to consume observables in templates",
                    "<code>Subject</code>, <code>BehaviorSubject</code>, <code>ReplaySubject</code> — for multicasting and state",
                ],
            },
            {
                title: "Angular Signals",
                items: [
                    "What signals are: fine-grained reactivity (Angular 16+)",
                    "Creating signals: <code>signal()</code>, reading with <code>()</code>, updating with <code>.set()</code> and <code>.update()</code>",
                    "<code>computed()</code> — derived state that auto-updates",
                    "<code>effect()</code> — running side effects when signals change",
                    "Signals vs. RxJS — when to use each",
                    "Signal inputs: <code>input()</code> as a replacement for <code>@Input()</code>",
                    "The roadmap to signal-based components (zoneless Angular)",
                ],
            },
            {
                title: "Change Detection",
                items: [
                    "How Angular's change detection works by default (Zone.js)",
                    "<code>ChangeDetectionStrategy.OnPush</code> — what it does and why to always use it",
                    "Triggering change detection manually: <code>markForCheck()</code>, <code>detectChanges()</code>",
                    "Zoneless change detection (Angular 18+) with signals",
                    "Common performance mistakes: side effects in templates, large component trees",
                ],
            },
            {
                title: "State Management",
                items: [
                    "Local component state vs. shared service state",
                    "State in services with <code>BehaviorSubject</code> or signals — sufficient for most apps",
                    "NgRx Store — Redux-style state (actions, reducers, selectors, effects)",
                    "NgRx ComponentStore — lightweight local/feature state",
                    "NgRx SignalStore — the modern signal-based alternative",
                    "Akita, Elf — lighter-weight alternatives to NgRx",
                    "When you actually need a state management library (spoiler: later than you think)",
                ],
            },
        ],
    },
    {
        emoji: "🟠",
        label: "HTTP & Data",
        color: "#ea580c",
        topics: [
            {
                title: "HttpClient",
                items: [
                    "Providing <code>HttpClient</code>: <code>provideHttpClient()</code> or <code>HttpClientModule</code>",
                    "Making GET, POST, PUT, DELETE requests",
                    "<code>HttpClient</code> methods return observables — always subscribe",
                    "Typing responses: <code>http.get&lt;User[]&gt;('/api/users')</code>",
                    "Request options: headers, params, <code>observe</code>, <code>responseType</code>",
                    "Error handling with <code>catchError</code> and <code>throwError</code>",
                ],
            },
            {
                title: "HTTP Interceptors",
                items: [
                    "What interceptors are: middleware for every HTTP request/response",
                    "Functional interceptors (Angular 15+) vs. class-based interceptors",
                    "Common uses: attaching auth tokens, logging, global error handling, loading indicators",
                    "Chaining multiple interceptors",
                ],
            },
            {
                title: "Environments & Configuration",
                items: [
                    "<code>environment.ts</code> and <code>environment.prod.ts</code> for config per build target",
                    "Using <code>APP_INITIALIZER</code> to load config before the app boots",
                    "Injection tokens (<code>InjectionToken</code>) for providing non-class values",
                    "Feature flags and runtime configuration patterns",
                ],
            },
        ],
    },
    {
        emoji: "⚙️",
        label: "Tooling & Ecosystem",
        color: "#4b5563",
        topics: [
            {
                title: "Component Lifecycle Hooks",
                items: [
                    "<code>ngOnInit</code> — the right place to fetch data (not the constructor)",
                    "<code>ngOnChanges</code> — reacting to <code>@Input()</code> changes",
                    "<code>ngOnDestroy</code> — cleanup: unsubscribe, clear timers",
                    "<code>ngAfterViewInit</code> — when child components and DOM are ready",
                    "<code>ngAfterContentInit</code> — when projected content is ready",
                    "<code>DestroyRef</code> and <code>takeUntilDestroyed()</code> — the modern cleanup pattern",
                ],
            },
            {
                title: "Testing",
                items: [
                    "Unit testing with Jasmine and Karma (default) or Jest",
                    "<code>TestBed</code> — Angular's testing utility for creating component environments",
                    "Testing components: rendering, querying the DOM, triggering events",
                    "Testing services with dependency injection mocks",
                    "Testing with <code>HttpClientTestingModule</code> and <code>HttpTestingController</code>",
                    "Component harnesses (<code>@angular/cdk/testing</code>)",
                    "E2E testing with Cypress or Playwright",
                ],
            },
            {
                title: "Performance Optimization",
                items: [
                    "<code>OnPush</code> change detection as the baseline",
                    "Lazy loading routes to reduce initial bundle",
                    "The <code>@defer</code> block (Angular 17+) — defer loading parts of the template",
                    "Virtual scrolling with <code>@angular/cdk</code> for large lists",
                    "<code>trackBy</code> in <code>*ngFor</code> (and the <code>track</code> expression in <code>@for</code>)",
                    "Analyzing bundle size with <code>ng build --stats-json</code> + webpack-bundle-analyzer",
                    "Image optimization with <code>NgOptimizedImage</code>",
                ],
            },
            {
                title: "Angular CDK & Material",
                items: [
                    "Angular CDK — headless UI primitives (overlay, drag-drop, virtual scroll, a11y)",
                    "Angular Material — pre-built component library built on CDK",
                    "Using theming with Angular Material's design token system",
                    "When to use Material vs. building your own component library",
                ],
            },
            {
                title: "Patterns & Best Practices",
                items: [
                    "Smart (container) vs. dumb (presentational) component architecture",
                    "Feature-based folder structure over type-based (<code>feature/</code> not <code>components/</code>)",
                    "Single responsibility: components present, services orchestrate, stores hold state",
                    "Avoiding direct DOM manipulation — use Angular's abstractions instead",
                    "Barrel files (<code>index.ts</code>) for clean public APIs",
                    "Strict mode and strict templates — turn both on from day one",
                    "Angular ESLint (<code>@angular-eslint</code>) for enforcing Angular-specific rules",
                ],
            },
        ],
    },
];