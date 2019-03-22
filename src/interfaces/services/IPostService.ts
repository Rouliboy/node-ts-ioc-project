import Post from '../../models/Post';

export default interface IPostService {
  findById(id: number): Promise<Post>;

  findAll(start: number, count: number): Promise<Array<Post>>;

  create(user: Post): Promise<number>;
}
