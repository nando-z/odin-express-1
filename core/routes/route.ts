import{ Router, type Request, type Response } from 'express';
import { home, contact, about, abort404, hello} from '../../view/index';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    console.dir("GET Response from " + req.url);
    await res.send(home());
});

router.get('/hello/:name', async (req: Request, res: Response) => {
    const { name } = req.params;
    console.dir("GET Response from " + req.url);
    console.dir("GET Response from " + req.url);
    res.send(hello(name||"World"));
});


router.get('/contact', async (req: Request, res: Response) => {
    console.dir("GET Response from " + req.url);
   await  res.send(contact());
});
router.get('/about', async (req: Request, res: Response) => {
    console.dir("GET Response from " + req.url);
    await res.send(about());
});

router.use((req: Request, res: Response) => {
    console.dir("Page Not Found " + req.url);
     res.status(404).send(abort404());
});


export default router;