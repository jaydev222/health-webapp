#!/usr/bin/env node

const fs = require('fs-extra');
const { exec } = require('child_process');
const path = require('path');

// Helper to execute shell commands
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

// Step 1: Create missing files and configurations
const createMissingFiles = async () => {
  const files = {
    '.env.local': `DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/healthapp
NEXTAUTH_SECRET=your-secret-key
NEXT_PUBLIC_API_URL=http://localhost:3000/api`,
    'pages/api/health.js': `export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({
      userId: 1,
      healthMetrics: {
        steps: 5000,
        calories: 1200,
        sleepHours: 7,
      },
    });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};`,
    'components/TaskManager.js': `import React, { useState } from 'react';

export default function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};`
  };

  for (const [filePath, content] of Object.entries(files)) {
    console.log(`Creating ${filePath}...`);
    const fullPath = path.join(process.cwd(), filePath);
    await fs.outputFile(fullPath, content);
  }
  console.log('Missing files created successfully.');
};

// Step 2: Install dependencies
const installDependencies = async () => {
  console.log('Installing dependencies...');
  try {
    await runCommand('npm install');
    console.log('Dependencies installed successfully.');
  } catch (error) {
    console.error(`Error installing dependencies: ${error.message}`);
    process.exit(1);
  }
};

// Main execution flow
const setupHealthWebApp = async () => {
  console.log('Setting up health-webapp...');
  
  // Change working directory to the cloned repository
  try {
    process.chdir(path.resolve('health-webapp'));
  } catch (err) {
    console.error('Please ensure you have cloned the repository to `health-webapp` directory.');
    return;
  }

  await createMissingFiles();
  await installDependencies();
  console.log('Setup complete. You can now run the development server with `npm run dev`.');
};

setupHealthWebApp();
