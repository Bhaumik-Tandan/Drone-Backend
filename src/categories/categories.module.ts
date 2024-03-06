import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { MongooseModule } from '@nestjs/mongoose';
import CategoriesSchema from './categories.schema';

@Module({
  imports: [MongooseModule.forFeature([CategoriesSchema])],
  controllers: [CategoriesController],
  providers: [CategoriesService]
})
export class CategoriesModule {}
