# user-management-app
Test app with Vue 3 + TS + Vuetify

```md
# Vue 3 + Vite + Vuetify User Management App

## 📌 Project Description
A simple Vue 3 application using Vite, Pinia, Vue Router, and Vuetify. It allows users to fetch and display a list of users from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) API and view detailed user information.

## 🚀 Tech Stack
- **Vue 3** + Composition API
- **Vite** — fast build tool
- **Vue Router** — client-side routing
- **Pinia** — state management
- **Vuetify** — UI component library
- **Axios** — HTTP requests

## 📂 Project Structure
```
src/
 ├── components/      # Reusable components
 ├── pages/           # Application pages
 ├── router/          # Vue Router configuration
 ├── stores/          # Pinia store for state management
 ├── plugins/         # Plugins (e.g., Vuetify)
 ├── types/           # TypeScript type definitions
 ├── App.vue          # Root component
 ├── main.ts          # Entry point
```

## 🔧 Installation & Setup

### 1️⃣ Install dependencies:
```sh
npm install
```

### 2️⃣ Run the development server:
```sh
npm run dev
```

### 3️⃣ Build for production:
```sh
npm run build
```

### 4️⃣ Preview the production build:
```sh
npm run preview
```

## 📌 Features
✔ Fetch users from an API  
✔ Search users by name  
✔ View user details on a separate page  
✔ Loading indicator while fetching data  
✔ Responsive UI with Vuetify  
