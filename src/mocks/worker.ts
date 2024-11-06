import { setupWorker } from 'msw/browser';
import { recipeHandlers } from './recipeHandlers';
import { loginHandler } from './loginHandler';

export const worker = setupWorker(...recipeHandlers, ...loginHandler);
