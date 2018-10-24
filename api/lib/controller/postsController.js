"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_rest_1 = require("typescript-rest");
const typescript_rest_swagger_1 = require("typescript-rest-swagger");
const postsService_1 = require("../service/postsService");
let PostController = class PostController {
    listPosts() {
        return postsService_1.default.listPosts();
    }
    getPost(id) {
        const post = postsService_1.default.findPost(id);
        if (!post) {
            throw new typescript_rest_1.Errors.NotFoundError(`no post with id ${id}`);
        }
        return post;
    }
    addPost(post) {
        return postsService_1.default.addPost(post);
    }
    addPicture(image, id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield postsService_1.default.savePicture(image, id);
            }
            catch (e) {
                switch (e.code) {
                    case 1: {
                        throw new typescript_rest_1.Errors.NotFoundError(`no post with id ${id}`);
                    }
                    case 2: {
                        throw new typescript_rest_1.Errors.BadRequestError(`post with id ${id} already has a picture`);
                    }
                    default: {
                        throw new typescript_rest_1.Errors.InternalServerError(e);
                    }
                }
            }
        });
    }
};
__decorate([
    typescript_rest_1.GET,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], PostController.prototype, "listPosts", null);
__decorate([
    typescript_rest_1.Path(':id'),
    typescript_rest_1.GET,
    __param(0, typescript_rest_1.PathParam('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], PostController.prototype, "getPost", null);
__decorate([
    typescript_rest_1.POST,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], PostController.prototype, "addPost", null);
__decorate([
    typescript_rest_swagger_1.Response(400, 'The post already has an image', {
        data: {
            info: "post with id 321c04d0-a25f-11e8-ad0a-1d90dd5e7d7c already has a picture",
            status: 400
        }
    }),
    typescript_rest_swagger_1.Response(404, 'There is no post with the provided id'),
    typescript_rest_1.Path('/:id/picture'),
    typescript_rest_1.PUT,
    __param(0, typescript_rest_1.FileParam("image")), __param(1, typescript_rest_1.PathParam('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PostController.prototype, "addPicture", null);
PostController = __decorate([
    typescript_rest_1.Path('/posts')
], PostController);
exports.default = PostController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdHNDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXIvcG9zdHNDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBbUY7QUFDbkYscUVBQTBEO0FBQzFELDBEQUFrRDtBQU1sRCxJQUFxQixjQUFjLEdBQW5DO0lBT0UsU0FBUztRQUNQLE9BQU8sc0JBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBU0QsT0FBTyxDQUFrQixFQUFVO1FBQ2pDLE1BQU0sSUFBSSxHQUFHLHNCQUFXLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxNQUFNLElBQUksd0JBQU0sQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDekQ7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFRRCxPQUFPLENBQUMsSUFBbUI7UUFDekIsT0FBTyxzQkFBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBa0JLLFVBQVUsQ0FBcUIsS0FBMEIsRUFBbUIsRUFBVTs7WUFDMUYsSUFBSTtnQkFDRixPQUFPLE1BQU0sc0JBQVcsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2FBQ2pEO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFO29CQUNkLEtBQUssQ0FBQyxDQUFDLENBQUM7d0JBQ04sTUFBTSxJQUFJLHdCQUFNLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDO3FCQUN6RDtvQkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNOLE1BQU0sSUFBSSx3QkFBTSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsRUFBRSx3QkFBd0IsQ0FBQyxDQUFBO3FCQUM3RTtvQkFDRCxPQUFPLENBQUMsQ0FBQzt3QkFDUCxNQUFNLElBQUksd0JBQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDekM7aUJBQ0Y7YUFDRjtRQUNILENBQUM7S0FBQTtDQUNGLENBQUE7QUE5REM7SUFEQyxxQkFBRzs7O29DQUNTLEtBQUs7K0NBRWpCO0FBU0Q7SUFGQyxzQkFBSSxDQUFDLEtBQUssQ0FBQztJQUNYLHFCQUFHO0lBQ0ssV0FBQSwyQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFBOzs7OzZDQU12QjtBQVFEO0lBREMsc0JBQUk7Ozs7NkNBR0o7QUFrQkQ7SUFUQyxrQ0FBUSxDQUFNLEdBQUcsRUFBRSwrQkFBK0IsRUFBRTtRQUNuRCxJQUFJLEVBQUU7WUFDSixJQUFJLEVBQUUseUVBQXlFO1lBQy9FLE1BQU0sRUFBRSxHQUFHO1NBQ1o7S0FDRixDQUFDO0lBQ0Qsa0NBQVEsQ0FBdUIsR0FBRyxFQUFFLHVDQUF1QyxDQUFDO0lBQzVFLHNCQUFJLENBQUMsY0FBYyxDQUFDO0lBQ3BCLHFCQUFHO0lBQ2MsV0FBQSwyQkFBUyxDQUFDLE9BQU8sQ0FBQyxDQUFBLEVBQThCLFdBQUEsMkJBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTs7OztnREFnQmhGO0FBcEVrQixjQUFjO0lBRGxDLHNCQUFJLENBQUMsUUFBUSxDQUFDO0dBQ00sY0FBYyxDQXFFbEM7a0JBckVvQixjQUFjIn0=