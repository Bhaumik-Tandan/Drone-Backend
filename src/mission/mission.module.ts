import { Module } from '@nestjs/common';
import { MissionService } from './mission.service';
import { MissionController } from './mission.controller';
import MissionSchema from './mission.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([MissionSchema])],
  controllers: [MissionController],
  providers: [MissionService]
})
export class MissionModule {}
