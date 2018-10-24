/// <reference types="multer" />
import PostDTO from '../dto/postDTO';
import CreatePostDTO from '../dto/createPostDto';
export default class PostController {
    listPosts(): Array<PostDTO>;
    getPost(id: string): PostDTO;
    addPost(post: CreatePostDTO): PostDTO;
    addPicture(image: Express.Multer.File, id: string): Promise<PostDTO>;
}
