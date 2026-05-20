/**
 * Vercel Web Analytics Integration
 * 
 * This file initializes Vercel Web Analytics for the Drive Me Lyon website.
 * The analytics script is automatically injected and tracks page views.
 */

import { inject } from '@vercel/analytics';

// Initialize Vercel Web Analytics
inject({
  mode: 'auto', // Automatically detects development vs production
  debug: false, // Set to true if you want to see debug logs in development
});
