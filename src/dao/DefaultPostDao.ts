import {injectable} from "inversify";
import IPostDAO from "../interfaces/dao/IPostDAO";
import Post from "../models/Post";

export const post1 = new Post(1, 'Post numero 1');
export const post2 = new Post(2, 'Post numero 2');

@injectable()
export default class DefaultPostDao implements IPostDAO<Post, number> {
    create(instance: Post): Promise<number> {
        return Promise.resolve(post1.id);
    }

    findAll(start: number, count: number): Promise<Array<Post>> {
        return Promise.resolve([post1,post2]);
    }

    findById(key: number): Promise<Post> {
        return Promise.resolve(post1);
    }

}