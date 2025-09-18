# Peloton Clone - Architecture Documentation

## 🏛️ System Overview

This Peloton clone is a React-based single-page application (SPA) that replicates the core functionality and design of the Peloton website. The application follows modern React patterns with functional components, hooks, and context-based state management.

## 📐 Application Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Browser (Client)                         │
├─────────────────────────────────────────────────────────────┤
│  React Router (Client-side routing)                        │
├─────────────────────────────────────────────────────────────┤
│  Context Providers (Global State)                          │
│  ├── DataProvider (Store locations)                        │
│  └── SectionProvider (Navigation state)                    │
├─────────────────────────────────────────────────────────────┤
│  Page Components                                            │
│  ├── LandingPage (Homepage)                                │
│  ├── ShowroomPage (Store locator)                          │
│  └── StorePage (Individual store)                          │
├─────────────────────────────────────────────────────────────┤
│  Reusable Components                                        │
│  ├── NavBar, HeroCard, BlogSection                         │
│  ├── MapComponent (Leaflet integration)                    │
│  └── Various content sections                              │
├─────────────────────────────────────────────────────────────┤
│  External Services                                          │
│  ├── Local API (http://localhost:8000/data)               │
│  ├── Cloudinary CDN (Images)                              │
│  └── Leaflet Maps (Store locations)                       │
└─────────────────────────────────────────────────────────────┘
```

## 🔄 Data Flow Patterns

### 1. Store Location Data Flow
```
Local API Server → DataContext → Local Storage Cache
                                      ↓
ShowroomPage → MapComponent → Interactive Map Display
            → ShowroomLocations → Store List Display
            → StorePage (/:id) → Individual Store Details
```

### 2. Navigation State Flow
```
User Interaction → SectionProvider → NavBar Updates
                → Scroll Detection → Section Highlighting
```

### 3. Component Communication Patterns

#### Parent-Child Props
```javascript
LandingPage
├── HeroCard (prodimg, prodname)
├── WorkoutSection (no props)
├── BlogSection
│   └── BlogCard (image, title, description)
└── PeletonTrail (no props)
```

#### Context-Based Global State
```javascript
App
├── DataProvider
│   └── Provides: Store location data
└── SectionProvider
    └── Provides: Current section tracking
```

## 🗂️ File Organization Strategy

### Component Structure
```
src/components/
├── [componentname]/
│   ├── ComponentName.jsx    # Main component logic
│   └── componentname.css    # Component-specific styles
```

### Page Structure
```
src/pages/
├── [pagename]/
│   ├── PageName.jsx         # Page component
│   └── pagename.css         # Page-specific styles
```

### Context Structure
```
src/context/
├── context.jsx              # Data management context
└── sectioncontext.jsx       # UI state context
```

## 🔧 Key Design Patterns

### 1. Container-Presenter Pattern
**ShowroomPage** (Container)
- Manages data fetching
- Handles loading states
- Passes data to presentational components

**ShowroomLocations** (Presenter)
- Receives data via props
- Focuses on rendering
- No direct data management

### 2. Compound Component Pattern
**LandingPage** acts as a composition root:
```javascript
<LandingPage>
  <HeroSection>
    <HeroCard />
    <HeroCard />
  </HeroSection>
  <WorkoutSection />
  <ProductSection />
  {/* ... additional sections */}
</LandingPage>
```

### 3. Provider Pattern
Global state management using React Context:
```javascript
<DataProvider>
  <SectionProvider>
    <App />
  </SectionProvider>
</DataProvider>
```

## 🎨 Styling Architecture

### CSS Organization
- **Component-scoped CSS**: Each component has its own stylesheet
- **BEM-like naming**: `.component-name__element--modifier`
- **Responsive utilities**: `.mobile-hide`, responsive breakpoints
- **CSS Custom Properties**: For consistent theming (if implemented)

### Responsive Design Strategy
1. **Mobile-first approach**: Base styles for mobile
2. **Progressive enhancement**: Additional styles for larger screens
3. **Utility classes**: `.mobile-hide` for conditional rendering
4. **Flexible layouts**: CSS Grid and Flexbox for responsive layouts

## 🔌 External Integrations

### Map Integration (React Leaflet)
```javascript
MapComponent
├── Leaflet base map
├── Marker clustering
├── Custom marker icons
└── Interactive popup displays
```

### CDN Integration
- **Cloudinary**: Optimized image delivery with responsive sizing
- **Content Delivery**: Images served with automatic format optimization
- **Performance**: Lazy loading and progressive enhancement

### API Integration
```javascript
DataContext
├── Fetch from localhost:8000/data
├── localStorage caching
├── Error handling
└── Loading state management
```

## 📱 State Management Strategy

### Local Component State
```javascript
// For UI-specific state
const [isLoading, setIsLoading] = useState(false);
const [selectedItem, setSelectedItem] = useState(null);
```

### Context State (Global)
```javascript
// For application-wide data
DataContext: Store locations, cached data
SectionContext: Navigation state, current section
```

### External State (Browser APIs)
```javascript
// localStorage for caching
localStorage.setItem('cachedData', JSON.stringify(data));

// URL parameters for routing
const { id } = useParams(); // React Router
```

## 🚀 Performance Considerations

### Data Loading Strategies
1. **Caching**: localStorage prevents redundant API calls
2. **Loading states**: User feedback during data fetching
3. **Error boundaries**: Graceful error handling
4. **Conditional rendering**: Load components only when needed

### Image Optimization
1. **CDN delivery**: Cloudinary for optimized images
2. **Responsive images**: Different sizes for different screens
3. **Lazy loading**: Images load as needed
4. **Format optimization**: Automatic WebP/AVIF serving

### Bundle Optimization
1. **Code splitting**: React.lazy() for route-based splitting
2. **Tree shaking**: Webpack removes unused code
3. **Asset optimization**: Create React App's built-in optimizations

## 🔍 Development Workflow

### Component Development Process
1. **Create component folder** with JSX and CSS files
2. **Implement component logic** with props interface
3. **Add responsive styling** with mobile-first approach
4. **Integrate with parent components** via props or context
5. **Test component rendering** and interactions

### State Management Workflow
1. **Identify state scope** (local vs global)
2. **Choose appropriate pattern** (useState vs Context)
3. **Implement data flow** with clear dependencies
4. **Add error handling** and loading states
5. **Optimize for performance** with memoization if needed

## 🧪 Testing Strategy (Recommendations)

### Unit Testing
```javascript
// Component testing with React Testing Library
test('HeroCard renders product name', () => {
  render(<HeroCard prodname="Bike" prodimg="/test.jpg" />);
  expect(screen.getByText('Bike')).toBeInTheDocument();
});
```

### Integration Testing
```javascript
// Context integration testing
test('DataProvider provides store data to children', () => {
  // Test context data flow
});
```

### End-to-End Testing
```javascript
// User journey testing with Cypress/Playwright
test('User can navigate from homepage to store locator', () => {
  // Test full user workflows
});
```

## 🔧 Build and Deployment

### Development Build
```bash
npm start  # Development server with hot reloading
```

### Production Build
```bash
npm run build  # Optimized production bundle
```

### Build Output
```
build/
├── static/
│   ├── css/     # Compiled and minified CSS
│   ├── js/      # Compiled and chunked JavaScript
│   └── media/   # Optimized images and assets
└── index.html   # Entry point with asset references
```

This architecture provides a solid foundation for a scalable, maintainable React application with modern development practices and performance optimizations.