"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const postRepository_1 = require("../repository/postRepository");
const postTransformer_1 = require("../dto/transformer/postTransformer");
const uuid_1 = require("uuid");
const fs = require("fs");
class PostService {
    constructor() {
        if (!PostService.instance) {
            PostService.instance = this;
        }
        return PostService.instance;
    }
    listPosts() {
        return postRepository_1.default.posts.map(post => postTransformer_1.toDTO(post));
    }
    findPost(id) {
        const post = postRepository_1.default.getPost(id);
        if (!post) {
            return undefined;
        }
        return postTransformer_1.toDTO(post);
    }
    addPost(post) {
        return postTransformer_1.toDTO(postRepository_1.default.addPost(post.title, post.description, post.tags));
    }
    savePicture(file, id) {
        return new Promise((resolve, reject) => {
            const post = postRepository_1.default.getPost(id);
            if (!post) {
                return reject({ code: 1, message: 'resource not found' });
            }
            if (post.photoUrl) {
                return reject({ code: 2, message: 'trying to edit' });
            }
            const path = `/images/${uuid_1.v1()}.png`;
            fs.writeFile(`public/${path}`, file.buffer, 'binary', (e) => {
                if (e) {
                    console.error(e);
                    return reject(Object.assign({ code: 3, message: 'file error' }, e));
                }
                post.photoUrl = path;
                postRepository_1.default.update(post);
                resolve(postTransformer_1.toDTO(post));
            });
        });
    }
}
exports.default = new PostService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHNTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2UvcG9zdHNTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUVBQTJEO0FBRTNELHdFQUFrRTtBQUVsRSwrQkFBZ0M7QUFDaEMseUJBQXlCO0FBRXpCO0lBR0U7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRTtZQUN6QixXQUFXLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUM3QjtRQUNELE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQztJQUM5QixDQUFDO0lBRUQsU0FBUztRQUNQLE9BQU8sd0JBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsdUJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxRQUFRLENBQUMsRUFBVTtRQUNqQixNQUFNLElBQUksR0FBRyx3QkFBZSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxPQUFPLHVCQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFtQjtRQUN6QixPQUFPLHVCQUFLLENBQUMsd0JBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCxXQUFXLENBQUMsSUFBeUIsRUFBRSxFQUFVO1FBQy9DLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsTUFBTSxJQUFJLEdBQUcsd0JBQWUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVCxPQUFPLE1BQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFDLENBQUMsQ0FBQzthQUN6RDtZQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsT0FBTyxNQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBQyxDQUFDLENBQUM7YUFDckQ7WUFFRCxNQUFNLElBQUksR0FBRyxXQUFXLFNBQUksRUFBRSxNQUFNLENBQUM7WUFDckMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBTSxFQUFFLEVBQUU7Z0JBQy9ELElBQUksQ0FBQyxFQUFFO29CQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLE9BQU8sTUFBTSxpQkFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxZQUFZLElBQUssQ0FBQyxFQUFFLENBQUM7aUJBQ3ZEO2dCQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUNyQix3QkFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxDQUFDLHVCQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBRUQsa0JBQWUsSUFBSSxXQUFXLEVBQUUsQ0FBQyJ9