/**
 * Build script for Drive Me Lyon
 * Bundles the Vercel Analytics with the existing app.js
 */

const esbuild = require('esbuild');
const fs = require('fs');

async function build() {
  try {
    // Bundle analytics initialization
    await esbuild.build({
      entryPoints: ['analytics.js'],
      bundle: true,
      outfile: 'dist/analytics.bundle.js',
      format: 'iife',
      platform: 'browser',
      minify: true,
      sourcemap: true,
    });

    console.log('✅ Analytics bundle created successfully!');
    console.log('   Output: dist/analytics.bundle.js');
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

build();
