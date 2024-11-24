import { setupWorker } from 'msw/browser';
import { recipeHandlers } from './recipeHandlers';
import { userHandlers } from './userHandlers';
import { scrapHandler } from './scrapHandler';
import { commentHandler } from './commentHandlers';
import { myinfoHandlers } from './myinfoHandlers';

export const worker = setupWorker(...recipeHandlers, ...userHandlers, ...scrapHandler, ...commentHandler, ...myinfoHandlers);
