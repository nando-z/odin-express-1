import{ Router, type Request, type Response } from 'express';
import abort404 from '../../view/abort';
import home from '../../view';
import contect from '../../view/contact-me';
import about from '../../view/about';
const router = Router();

router.get('/', (req: Request, res: Response) => {
    console.dir("GET Response from " + req.url);
    res.send(home());
});

router.get('/contact', (req: Request, res: Response) => {
    console.dir("GET Response from " + req.url);
    res.send(contect());
});
router.get('/about', (req: Request, res: Response) => {
    console.dir("GET Response from " + req.url);
    res.send(about());
});

router.use((req: Request, res: Response) => {
    console.dir("Page Not Found " + req.url);
    res.status(404).send(abort404());
});


export default router;