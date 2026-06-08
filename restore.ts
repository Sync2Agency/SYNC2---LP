import { execSync } from 'child_process';
import fs from 'fs';
try {
  console.log('CWD:', process.cwd());
  
  // Repair missing .git subdirectories
  fs.mkdirSync('.git/refs', { recursive: true });
  fs.mkdirSync('.git/refs/heads', { recursive: true });
  fs.mkdirSync('.git/refs/tags', { recursive: true });

  if (fs.existsSync('.git/index')) {
    fs.unlinkSync('.git/index');
  }

  execSync('git config --global --add safe.directory "*"');
  try {
    console.log('Git status:', execSync('git status', { encoding: 'utf-8' }));
  } catch(e: any){ console.error('status err:', e.message); }
  try {
    console.log('Git branch:', execSync('git branch -a', { encoding: 'utf-8' }));
  } catch(e: any){ console.error('branch err:', e.message); }
  try {
    console.log('Git log:', execSync('git log --oneline -n 5', { encoding: 'utf-8' }));
  } catch(e: any){ console.error('log err:', e.message); }

} catch (e: any) {
  console.error('Error:', e.message);
}
