import{ Router, type Request, type Response } from 'express';
import {hello, home, contact, about, abort404} from '../../view/index';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    console.dir("GET Response from " + req.url);
    await res.send(home());
});

router.get('/?print/:user', async (req: Request, res: Response) => {
    console.dir("GET Response from " + req.url);
    await res.send(hello());
});


router.get('/contact', async (req: Request, res: Response) => {
    console.dir("GET Response from " + req.url);
   await  res.send(contact());
});
router.get('/about', async (req: Request, res: Response) => {
    console.dir("GET Response from " + req.url);
    await res.send(about());
});

router.get( '*', async (req: Request, res: Response) => {
    console.dir("Page Not Found " + req.url);
    await res.status(404).send(abort404());
});


export default router;