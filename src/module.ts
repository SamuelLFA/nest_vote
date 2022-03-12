import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './controllers/controller';
import { VoteController } from './controllers/voteController';
import { Vote } from './entities/vote.entity';
import { AppService } from './services/service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'root',
      database: 'root',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Vote]),
  ],
  exports: [TypeOrmModule],
  controllers: [AppController, VoteController],
  providers: [AppService],
})
export class AppModule {}
