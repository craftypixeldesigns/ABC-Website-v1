#!/usr/bin/env node

const { execSync } = require('child_process');

const repo = process.argv[2];
const branch = process.argv[3] || 'main';
const path = process.argv[4] || '/';

if (!repo) {
  console.error('Usage: node enable_pages.cjs <owner/repo> [branch] [path]');
  process.exit(1);
}

const payload = JSON.stringify({
  source: {
    branch: branch,
    path: path
  }
});

try {
  console.log(`Enabling GitHub Pages for ${repo} on branch ${branch} and path ${path}...`);
  const output = execSync(`echo '${payload}' | gh api repos/${repo}/pages --method POST --input -`, { encoding: 'utf8' });
  console.log('Success:', output);
} catch (error) {
  if (error.stderr && error.stderr.includes('409')) {
    console.log('GitHub Pages is already enabled for this repository.');
  } else {
    console.error('Error enabling GitHub Pages:', error.stderr || error.message);
    process.exit(1);
  }
}
