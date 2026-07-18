# Smart Desktop Wallpaper

A modern desktop wallpaper application built with Rails and React, featuring real-time weather information and a beautiful, responsive UI.

## About

This project combines Rails backend capabilities with a modern React frontend, using Atomic Design principles for component organization. It provides a smart desktop wallpaper experience with live weather updates and personalized welcome messages.

## Technology Stack

### Backend
* **Ruby version:** 4.0.5
* **Rails version:** 8.1.3
* **Database:** SQLite (Development)
* **Job Queue:** Rails 8 built-in
* **Cache:** Rails built-in caching

### Frontend
* **React** with TypeScript
* **Inertia.js** for seamless Rails-React integration
* **Vite** for fast builds and development
* **Tailwind CSS** for styling
* **Storybook** for component development
* **Vitest** for unit testing

## Features

* Real-time weather display with Open-Meteo integration
* Personalized user greeting
* Responsive design with modern UI/UX
* Component-driven development with Atomic Design
* PWA support

## Project Structure

### Component Organization (Atomic Design)
```
app/javascript/components/
├── atoms/          # Basic UI elements (Button, Weather, etc.)
├── molecules/      # Component combinations
├── organisms/      # Complex components
└── templates/      # Page layouts
```

### Key Directories
* `app/controllers/` - Rails controllers
* `app/javascript/` - React components and pages
* `app/models/` - Rails models
* `app/services/` - Business logic 
* `stories/` - Storybook stories
* `test/` - Test suite

## System dependencies

* Node.js and npm
* Ruby 4.0.5
* Bundler

## Configuration

See `config/` directory for application configuration.

* Database: `config/database.yml`
* Vite: `vite.json`
* Inertia: `config/initializers/inertia_rails.rb`

## Database creation

```bash
bin/rails db:create
```

## Database initialization

```bash
bin/rails db:seed
```

## How to run the test suite

```bash
bin/rails test
npm run test
```

## Development Server

Start the development server:
```bash
bin/dev
```

This runs both the Rails server and Vite dev server concurrently.

## Storybook

View component stories in isolation:
```bash
npm run storybook
```

## Services (job queues, cache servers, search engines, etc.)

* **WeatherService** - Fetches real-time weather data
* Rails background job queue for async tasks

## Deployment instructions

See `config/deploy.yml` for deployment configuration using Kamal.

* ...
