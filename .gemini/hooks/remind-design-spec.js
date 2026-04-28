#!/usr/bin/env node
const fs = require('fs');

/**
 * Gemini CLI AfterTool Hook
 * Purpose: Remind the agent to update spec/DESIGN.md after modifying .html files.
 */

try {
  const input = JSON.parse(fs.readFileSync(0, 'utf-8'));
  const toolName = input.tool_name;
  const toolArgs = input.tool_arguments || {};
  
  let shouldRemind = false;

  if (['write_file', 'replace'].includes(toolName)) {
    if (toolArgs.file_path && toolArgs.file_path.endsWith('.html')) {
      shouldRemind = true;
    }
  } else if (toolName === 'run_shell_command') {
    // For shell commands, we look for .html in the command string as a heuristic
    if (toolArgs.command && toolArgs.command.includes('.html')) {
      shouldRemind = true;
    }
  }
  
  if (shouldRemind) {
    const output = {
      decision: "allow",
      hookSpecificOutput: {
        additionalContext: "\n\n⚠️ **REMINDER**: You have modified an HTML file. " +
                           "Please ensure that `spec/DESIGN.md` is updated to reflect any changes in " +
                           "design tokens, components, layout, or file paths if they deviate from the spec."
      }
    };
    console.log(JSON.stringify(output));
  } else {
    console.log(JSON.stringify({ decision: "allow" }));
  }
} catch (err) {
  process.exit(0);
}
