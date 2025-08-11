const { execSync } = require('child_process');
const path = require('path');

console.log('Starting Prisma prebuild...');
console.log('Current directory:', process.cwd());

try {
  // Ensure Prisma is installed
  const prismaPath = path.join(process.cwd(), 'node_modules', '.bin', 'prisma');
  console.log(`Prisma path: ${prismaPath}`);
  
  // Run Prisma generate
  console.log('Generating Prisma client...');
  execSync(`${prismaPath} generate`, { stdio: 'inherit' });
  
  console.log('✅ Prisma client generated successfully');
} catch (error) {
  console.error('❌ Prisma generation failed:');
  console.error(error);
  process.exit(1);
}