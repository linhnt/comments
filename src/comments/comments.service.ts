import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from './comments.entity';
import { FindManyOptions, Repository } from 'typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment) private readonly commentRepository: Repository<Comment>
  ) {

  }

  async find(options: FindManyOptions): Promise<Comment[]> {
    return this.commentRepository.find(options);
  }

  async create(data) {
    return this.commentRepository.save(data);
  }
}
