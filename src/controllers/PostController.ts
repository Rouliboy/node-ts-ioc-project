import * as express from "express";
import {
    interfaces,
    controller,
    httpGet,
    httpPost,
    httpDelete,
    request,
    queryParam,
    next,
    response,
    requestParam
} from "inversify-express-utils";
import {inject} from "inversify";
import Post from "../models/Post";
import IPostService from "../interfaces/services/IPostService";
import TYPE from '../constants/TYPES';

@controller("/posts")
export class PostController implements interfaces.Controller {

    private readonly _postService: IPostService;

    public constructor(@inject(TYPE.PostService) postService: IPostService) {
        this._postService = postService;
    }

    @httpGet("/")
    private getAll(@queryParam("start") start: number, @queryParam("count") count: number,
                   @response() res: express.Response, @next() next: express.NextFunction) {
        return this._postService.findAll(start, count)
            .then((posts: Array<Post>) => res.json({data: posts}))
            .catch((err: Error) => {
                res.status(400).json({error: err.message});
            });
    }

    @httpGet("/:id")
    private getById(@requestParam("id") id: number, @response() res: express.Response) {
        return this._postService.findById(id)
            .then((post: Post) => res.json({data: post}))
            .catch((err: Error) => {
                res.status(400).json({error: err.message});
            });
    }

    @httpPost("/")
    private create(@request() req: express.Request, @response() res: express.Response) {
        return this._postService.create(req.body)
            .then(() => res.sendStatus(201))
            .catch((err: Error) => {
                res.status(400).json({error: err.message});
            });

    }
}