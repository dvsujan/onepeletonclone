# Peloton Clone

A React-based clone of the Peloton website featuring a modern, responsive design with interactive components, store locator functionality, and dynamic content management.

## 🏗️ Project Architecture

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and follows a component-based architecture with React Router for navigation and Context API for state management.

### 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── navbar/         # Navigation bar component
│   ├── herocard/       # Product cards for hero section
│   ├── workoutsection/ # Workout content section
│   ├── productsection/ # Product showcase section
│   ├── blogsection/    # Blog content section
│   ├── peletontrail/   # Trial promotion section
│   ├── mapcomponent/   # Interactive store locator map
│   └── ...
├── pages/              # Main page components
│   ├── landingpage/    # Home page layout
│   ├── showroompage/   # Store locator page
│   └── storepage/      # Individual store details
├── context/            # React Context for state management
│   ├── context.jsx     # Data provider for store information
│   └── sectioncontext.jsx # Section tracking context
└── assets/             # Static assets
```

### 🧩 Key Components Overview

#### Core Pages
- **LandingPage**: Main homepage with hero section, product showcase, and content sections
- **ShowroomPage**: Store locator with interactive map and location listings
- **StorePage**: Individual store details and information

#### Reusable Components
- **NavBar**: Site navigation with responsive design
- **HeroCard**: Product display cards with images and names
- **BlogSection**: Content showcase with instructor finder and blog posts
- **MapComponent**: Interactive Leaflet map for store locations
- **PeletonTrail**: Call-to-action section for trial promotions

## 🔄 Data Flow & State Management

### React Context Architecture

The application uses React Context API for centralized state management:

#### DataContext (`src/context/context.jsx`)
- **Purpose**: Manages store location data across the application
- **Features**:
  - Local storage caching for performance
  - Fetches data from `http://localhost:8000/data`
  - Provides store information to all child components
- **Usage**: Wrapped around the entire application in `App.js`

#### SectionContext (`src/context/sectioncontext.jsx`)
- **Purpose**: Tracks current page section for navigation highlighting
- **Features**:
  - Manages `currentSection` state
  - Provides section tracking across components
- **Usage**: Used for navigation state management

### Data Sources
- **Store Data**: JSON files (`stores.json`, `stores2.json`) containing location information
- **External API**: Local development server at `http://localhost:8000/data`
- **Local Storage**: Caches fetched data for improved performance

## 🗺️ Routing Structure

The application uses React Router v6 for client-side routing:

```javascript
Routes:
├── "/" → LandingPage (Homepage)
├── "/showrooms" → ShowroomPage (Store locator)
├── "/showrooms/:id" → StorePage (Individual store details)
└── "*" → 404 Not Found
```

### Navigation Features
- **Responsive navbar** with mobile-friendly design
- **Dynamic routing** for store pages with URL parameters
- **404 handling** for undefined routes

## 🎨 UI Components Breakdown

### Landing Page Components Stack
```
LandingPage
├── Hero Section
│   ├── Product showcase text
│   └── HeroCard components (Bike, Bike+, Row)
├── WorkoutSection (Workout content)
├── ProductSection (Product showcase)
├── GiftCard (Gift card promotions)
├── BlogSection (Content & instructor finder)
├── PeletonTrail (Trial CTA)
└── TCSection (Terms & conditions)
```

### Interactive Features
- **Store Locator Map**: Leaflet-based interactive map showing store locations
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Loading States**: Loading animations for data fetching
- **Image Optimization**: CDN-hosted images with responsive sizing

## 🛠️ Technology Stack

- **Frontend Framework**: React 18.3.1
- **Routing**: React Router DOM v6
- **Mapping**: React Leaflet v4.2.1
- **UI Components**: Custom CSS with responsive design
- **Icons**: React Icons v5.3.0
- **Carousel**: React Alice Carousel v2.9.1
- **Intersection Observer**: For scroll-based animations
- **Build Tool**: Create React App (Webpack, Babel)


## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager
- Git

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/dvsujan/onepeletonclone.git
   cd onepeletonclone
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000)

4. **For store locator functionality**, start the mock API server:
   ```bash
   # In a separate terminal
   # You'll need to set up a local server at http://localhost:8000/data
   # serving the store data from stores.json or stores2.json
   ```

## 📋 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## 🔧 Development Notes

### Current Build Issues
The project currently has some ESLint warnings that prevent production builds:
- Unused imports (ReactDOM, MapComponent, useEffect, useState)
- Missing href attributes on anchor tags
- React hooks dependency warnings
- Equality operator preferences (== vs ===)

### API Integration
The project expects a local development server running at `http://localhost:8000/data` for store location data. The data should match the format found in `stores.json` and `stores2.json`.

### Responsive Design
The project uses a mobile-first approach with specific classes:
- `.mobile-hide` - Hides content on mobile devices
- Responsive breakpoints defined in individual CSS files

### Performance Features
- **Local Storage Caching**: Store data is cached to improve load times
- **CDN Integration**: Images are served from Cloudinary CDN
- **Loading States**: Proper loading indicators for data-dependent components

## 🎯 Key Features Explained

### Store Locator System
1. **Data Flow**: DataContext fetches store data → ShowroomPage displays map and listings
2. **Map Integration**: Uses React Leaflet for interactive mapping
3. **Caching**: Implements localStorage for offline-first experience
4. **Dynamic Routing**: Individual store pages with URL parameters

### Component Architecture
- **Compound Components**: Each page combines multiple smaller components
- **Prop-driven Design**: Components receive data through props for reusability
- **Context Integration**: Global state managed through React Context
- **CSS Modules**: Component-scoped styling with individual CSS files

### Content Management
- **Static Content**: Most content is hardcoded in components
- **Dynamic Images**: Product and blog images served from external CDNs
- **Responsive Images**: Different image sizes based on device capabilities
