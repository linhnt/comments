import { Comment } from './comments.entity';
import { FindManyOptions, Repository } from 'typeorm';
export declare class CommentsService {
    private readonly commentRepository;
    constructor(commentRepository: Repository<Comment>);
    find(options: FindManyOptions): Promise<Comment[]>;
    create(data: any): Promise<any>;
}
