import { Body, Controller, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NewVoteDTO } from 'src/dto/newVoteDTO';
import { Vote } from 'src/entities/vote.entity';
import { Repository } from 'typeorm';

@Controller('newVote')
export class VoteController {
  constructor(
    @InjectRepository(Vote)
    private usersRepository: Repository<Vote>,
  ) {}

  @Post()
  newVote(@Body() newVoteDTO: NewVoteDTO): Vote {
    const entity = newVoteDTO.toEntity();

    this.usersRepository.save(entity);
    return entity;
  }
}
