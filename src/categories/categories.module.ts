import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import CategoriesSchema from './categories.schema';
import MissionSchema from 'src/mission/mission.schema';
import { MissionService } from 'src/mission/mission.service';
import DronesSchema from 'src/drones/drones.schema';
import { DronesService } from 'src/drones/drones.service';

@Module({
  imports: [MongooseModule.forFeature([CategoriesSchema,MissionSchema,DronesSchema])],
  controllers: [CategoriesController],
  providers: [CategoriesService,MissionService,DronesService]
})
export class CategoriesModule {}
