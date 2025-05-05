import{  Router , type Request, type Response } from 'express';

const router = Router();
// Home Page Route
router.get('/', async (req: Request, res: Response) => {
    console.log("[GET] Response from......" + req.url);
    res.status(200)
    .json({
        message: "Hello World"
    });
}).post('/', async (req: Request, res: Response) => {
    console.dir("[POST] Response from......" + req.url);
    res.status(200)
    .json({
        message: "Hello World"
    });
});


// 404 Page

router.use((req: Request, res: Response) => {
    console.error("Page Not Found......" + req.url);
     res.status(404)
     .json({
        message: "Page Not Found"

     });
});


export default router;