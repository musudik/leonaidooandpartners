# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


npm install @headlessui/react @heroicons/react tailwindcss postcss autoprefixer
npx tailwindcss init -p

# In client directory
npm install firebase
# In functions directory
npm install googleapis

#Development Environment
# Start AI server in development
cd ai
npm run start:dev

# Start client in development
cd client
npm run start:dev

#Production Environment:
# Start AI server in production
cd ai
npm run start:prod

# Build and start client in production
cd client
npm run build
npm run start:prod

#For deployment, you might want to use PM2 to manage your Node.js processes:
# Install PM2 globally
npm install -g pm2

# Start AI server with PM2 in production
pm2 start npm --name "ai-server" -- run start:prod

# Start client server with PM2 in production
pm2 start npm --name "client-server" -- run start:prod

#To monitor your PM2 processes:
pm2 status
pm2 logs
pm2 monit