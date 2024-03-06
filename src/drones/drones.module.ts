import { Module } from '@nestjs/common';
import { DronesService } from './drones.service';
import { DronesController } from './drones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import DronesSchema from './drones.schema';

@Module({
  imports: [MongooseModule.forFeature([DronesSchema])],
  controllers: [DronesController],
  providers: [DronesService],
})
export class DronesModule {}
