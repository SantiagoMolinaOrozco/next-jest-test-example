"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("../model/post");
const uuid_1 = require("uuid");
class PostsRepository {
    constructor() {
        this._posts = [
            new post_1.default('321c04d0-a25f-11e8-ad0a-1d90dd5e7d7c', 'first post in the world', 'this is a post description for a post with a post post', ['first', 'test'], 'images/52dcf130-a268-11e8-aec5-a13ee2174102.png'),
        ];
        if (!PostsRepository.instance) {
            PostsRepository.instance = this;
        }
        return PostsRepository.instance;
    }
    get posts() {
        return this._posts;
    }
    getPost(id) {
        return this._posts.find(post => post.id === id);
    }
    addPost(title, description, tags) {
        const newPost = new post_1.default(uuid_1.v1(), title, description, tags);
        this._posts.push(newPost);
        return newPost;
    }
    update(post) {
        const index = this._posts.findIndex((p) => { return p.id === post.id; });
        this._posts[index] = post;
        return post;
    }
}
exports.default = new PostsRepository();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdFJlcG9zaXRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcmVwb3NpdG9yeS9wb3N0UmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUFpQztBQUNqQywrQkFBZ0M7QUFFaEM7SUFVRTtRQVJRLFdBQU0sR0FBZ0I7WUFDNUIsSUFBSSxjQUFJLENBQUMsc0NBQXNDLEVBQzdDLHlCQUF5QixFQUN6Qix3REFBd0QsRUFDeEQsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQ2pCLGlEQUFpRCxDQUFDO1NBQ3JELENBQUM7UUFHQSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRTtZQUM3QixlQUFlLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUNqQztRQUNELE9BQU8sZUFBZSxDQUFDLFFBQVEsQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxPQUFPLENBQUMsRUFBVTtRQUNoQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQWEsRUFBRSxXQUFtQixFQUFFLElBQW1CO1FBQzdELE1BQU0sT0FBTyxHQUFHLElBQUksY0FBSSxDQUFDLFNBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFVO1FBQ2YsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFPLEVBQUMsRUFBRSxHQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDMUIsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLGVBQWUsRUFBRSxDQUFDIn0=