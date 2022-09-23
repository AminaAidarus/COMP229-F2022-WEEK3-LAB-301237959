// Index Routes 
import { Router } from 'express';
import { helloPlain } from '../controllers/index.controller.server.js';
import { helloHtml } from '../controllers/index.controller.server.js';
const router = Router();

// add middleware to connect application
router.get('/',helloPlain);
router.get('/html',helloHtml);

export default router;