/// <reference types="multer" />
import PostDTO from '../dto/postDTO';
import CreatePostDTO from "../dto/createPostDto";
declare class PostService {
    private static instance;
    constructor();
    listPosts(): Array<PostDTO>;
    findPost(id: string): PostDTO | undefined;
    addPost(post: CreatePostDTO): PostDTO;
    savePicture(file: Express.Multer.File, id: string): Promise<PostDTO>;
}
declare const _default: PostService;
export default _default;
