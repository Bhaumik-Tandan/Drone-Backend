import { Module } from '@nestjs/common';
import { SitesService } from './sites.service';
import { SitesController } from './sites.controller';
import { MongooseModule } from '@nestjs/mongoose';
import SitesSchema from './sites.schema';
import { MissionService } from 'src/mission/mission.service';
import { MissionModule } from 'src/mission/mission.module';
import MissionSchema from 'src/mission/mission.schema';
import { DronesModule } from 'src/drones/drones.module';
import DronesSchema from 'src/drones/drones.schema';
import { DronesService } from 'src/drones/drones.service';

@Module({
  imports: [
    MongooseModule.forFeature([SitesSchema, MissionSchema, DronesSchema]),
    MissionModule,
    DronesModule,
  ],
  controllers: [SitesController],
  providers: [SitesService, MissionService, DronesService],
})
export class SitesModule {}
