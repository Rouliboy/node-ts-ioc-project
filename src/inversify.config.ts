import { Container } from "inversify";
import TYPES from "./constants/TYPES";

import IPostService from "./interfaces/services/IPostService";
import DefaultPostService from "./services/post/DefaultPostService";
import IPostDAO from "./interfaces/dao/IPostDAO";
import DefaultPostDao from "./dao/DefaultPostDao";
import Post from "./models/Post";
import './controllers/PostController';

const myContainer = new Container();

// Post
myContainer
  .bind<IPostService>(TYPES.PostService)
  .to(DefaultPostService);
myContainer
  .bind<IPostDAO<Post, number>>(TYPES.PostDAO)
  .to(DefaultPostDao);

export default myContainer;