import{ Router, type Request, type Response } from 'express';
import abort404 from '../../view/abort';
import home from '../../view';
import contect from '../../view/contact-me';
import about from '../../view/about';
const router = Router();

router.get('/', async (req: Request, res: Response) => {
    console.dir("GET Response from " + req.url);
    await res.send(home());
});

router.get('/contact', async (req: Request, res: Response) => {
    console.dir("GET Response from " + req.url);
   await  res.send(contect());
});
router.get('/about', async (req: Request, res: Response) => {
    console.dir("GET Response from " + req.url);
    await res.send(about());
});

router.use( async (req: Request, res: Response) => {
    console.dir("Page Not Found " + req.url);
    await res.status(404).send(abort404());
});


export default router;