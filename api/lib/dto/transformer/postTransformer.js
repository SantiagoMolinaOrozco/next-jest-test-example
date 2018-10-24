"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("../../model/post");
function toDTO(post) {
    return {
        id: post.id,
        title: post.title,
        description: post.description,
        photoUrl: post.photoUrl,
        tags: post.tags,
    };
}
exports.toDTO = toDTO;
function toModel(post) {
    return new post_1.default(post.id, post.title, post.description, post.tags, post.photoUrl);
}
exports.toModel = toModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdFRyYW5zZm9ybWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2R0by90cmFuc2Zvcm1lci9wb3N0VHJhbnNmb3JtZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyQ0FBb0M7QUFFcEMsZUFBc0IsSUFBVTtJQUM5QixPQUFPO1FBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1FBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1FBQ2pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztRQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7UUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO0tBQ2hCLENBQUM7QUFDSixDQUFDO0FBUkQsc0JBUUM7QUFFRCxpQkFBd0IsSUFBYTtJQUNuQyxPQUFPLElBQUksY0FBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ25GLENBQUM7QUFGRCwwQkFFQyJ9