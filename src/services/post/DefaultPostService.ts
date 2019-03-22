import { inject, injectable } from 'inversify';

import IPostService from '../../interfaces/services/IPostService';
import Post from '../../models/Post';
import TYPE from '../../constants/TYPES';
import IPostDAO from '../../interfaces/dao/IPostDAO';

type PostDaoType = IPostDAO<Post, number>;

@injectable()
export default class PostServiceImpl implements IPostService {

  private readonly postDAO: PostDaoType;

  public constructor(@inject(TYPE.PostDAO) postDAO: PostDaoType) {
    this.postDAO = postDAO;
  }

  findById(id: number): Promise<Post> {
    return this.postDAO.findById(id);
  }

  findAll(start: number, count: number): Promise<Array<Post>> {
    return this.postDAO.findAll(start, count);
  }

  create(post: Post): Promise<number> {
    return this.postDAO.create(post);
  }
}
