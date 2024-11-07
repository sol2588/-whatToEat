import { setupWorker } from 'msw/browser';
import { recipeHandlers } from './recipeHandlers';
import { userHandlers } from './userHandlers';
import { scrapHandler } from './scrapHandler';

export const worker = setupWorker(...recipeHandlers, ...userHandlers, ...scrapHandler);
