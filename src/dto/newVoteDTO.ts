import { IsInt, IsNotEmpty, Max, Min } from 'class-validator';
import { Vote } from 'src/entities/vote.entity';

export class NewVoteDTO {
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(5)
  choose: number;

  toEntity(): Vote {
    return new Vote(this.choose);
  }
}
