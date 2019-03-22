import {inject, injectable} from "inversify";

import IPostService from '../../interfaces/services/IPostService';
import Post from "../../models/Post";
import TYPE from "../../constants/TYPES";
import IPostDAO from "../../interfaces/dao/IPostDAO";

type PostDaoType = IPostDAO<Post, number>;

@injectable()
export default class PostServiceImpl implements IPostService {

    private readonly _postDAO: PostDaoType;

    public constructor(@inject(TYPE.PostDAO) _postDAO: PostDaoType) {
        this._postDAO = _postDAO;
    }

    findById(id: number): Promise<Post> {
        return this._postDAO.findById(id);
    }

    findAll(start: number, count: number): Promise<Array<Post>> {
        return this._postDAO.findAll(start,count);
    }

    create(post: Post): Promise<number> {
        return this._postDAO.create(post);
    }
}