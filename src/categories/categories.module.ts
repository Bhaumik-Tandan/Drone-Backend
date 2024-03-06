import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import CategoriesSchema from './categories.schema';
import MissionSchema from 'src/mission/mission.schema';
import { MissionService } from 'src/mission/mission.service';

@Module({
  imports: [MongooseModule.forFeature([CategoriesSchema,MissionSchema])],
  controllers: [CategoriesController],
  providers: [CategoriesService,MissionService]
})
export class CategoriesModule {}
