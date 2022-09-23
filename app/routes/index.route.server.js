// Index Routes 
import { Router } from 'express';
import { helloPlain } from '../controllers/index.controller.server.js';
import { helloHtml } from '../controllers/index.controller.server.js';
const router = Router();

// add middleware to connect application
router.use('/',helloPlain);
router.use('/html',helloHtml);

export default router;