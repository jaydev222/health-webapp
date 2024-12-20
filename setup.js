#!/usr/bin/env node

const fs = require('fs-extra');
const { exec } = require('child_process');
const path = require('path');

// Helper function to run shell commands
const runCommand = (cmd) =>
  new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        reject(error);
      } else {
        resolve(stdout || stderr);
      }
    });
  });

// Step 1: Create required configurations
const createConfigFiles = async () => {
  const files = {
    '.env.local': `DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/healthapp
NEXTAUTH_SECRET=your-secret-key
NEXT_PUBLIC_API_URL=http://localhost:3000/api`,
    'next.config.js': `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
};
module.exports = nextConfig;`,
    'pages/index.js': `export default function Home() {
  return (
    <div>
      <h1>Welcome to Health Webapp</h1>
      <p>This is the landing page.</p>
    </div>
  );
};`
  };

  for (const [filePath, content] of Object.entries(files)) {
    console.log(`Creating ${filePath}...`);
    const fullPath = path.join(process.cwd(), filePath);
    await fs.outputFile(fullPath, content);
  }

  // Ensure required folders exist
  const directories = ['pages/api', 'components', 'public'];
  for (const dir of directories) {
    console.log(`Ensuring directory exists: ${dir}`);
    await fs.ensureDir(path.join(process.cwd(), dir));
  }

  console.log('Configurations and starter files created.');
};

// Step 2: Install dependencies
const installDependencies = async () => {
  console.log('Installing dependencies...');
  try {
    await runCommand('npm install next react react-dom');
    console.log('Dependencies installed successfully.');
  } catch (error) {
    console.error(`Error installing dependencies: ${error.message}`);
    process.exit(1);
  }
};

// Step 3: Run dev server
const runDevServer = async () => {
  console.log('Starting development server...');
  try {
    await runCommand('npm run dev');
  } catch (error) {
    console.error(`Error starting development server: ${error.message}`);
  }
};

// Main flow
const setupAndRun = async () => {
  console.log('Setting up health-webapp...');
  try {
    await createConfigFiles();
    await installDependencies();
    console.log('Setup complete. Starting the development server...');
    await runDevServer();
  } catch (error) {
    console.error(`Setup failed: ${error.message}`);
  }
};

setupAndRun();
