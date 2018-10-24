export default class Post {
    private _id;
    private _title;
    private _description;
    private _photoUrl;
    private _tags;
    constructor(id: string, title: string, description: string, tags: Array<string>, photoUrl?: string);
    id: string;
    title: string;
    description: string;
    photoUrl: string | undefined;
    tags: Array<string>;
    addTag(tag: string): void;
}
