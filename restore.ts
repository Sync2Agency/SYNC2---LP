import { execSync } from 'child_process';
try {
  const result = execSync('git checkout src/App.tsx', { encoding: 'utf-8' });
  console.log('Restore result:', result);
} catch (e: any) {
  console.error('Error restoring:', e.message);
}
