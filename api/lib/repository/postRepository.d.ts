import Post from '../model/post';
declare class PostsRepository {
    private static instance;
    private _posts;
    constructor();
    readonly posts: Post[];
    getPost(id: string): Post | undefined;
    addPost(title: string, description: string, tags: Array<string>): Post;
    update(post: Post): Post;
}
declare const _default: PostsRepository;
export default _default;
