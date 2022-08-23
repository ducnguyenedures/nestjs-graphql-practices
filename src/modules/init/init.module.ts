import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from 'src/entity';

import { Roles } from '../common';
import { InitService } from './providers';

@Module({
  imports: [ScheduleModule.forRoot(), TypeOrmModule.forFeature([Country, Roles])],
  providers: [InitService],
})
export class InitDbModule {}
