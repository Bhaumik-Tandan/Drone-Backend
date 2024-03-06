import { Module } from '@nestjs/common';
import { SitesService } from './sites.service';
import { SitesController } from './sites.controller';
import { MongooseModule } from '@nestjs/mongoose';
import SitesSchema from './sites.schema';
import { MissionService } from 'src/mission/mission.service';
import { MissionModule } from 'src/mission/mission.module';
import MissionSchema from 'src/mission/mission.schema';

@Module({
  imports: [MongooseModule.forFeature([SitesSchema,MissionSchema]),MissionModule],
  controllers: [SitesController],
  providers: [SitesService,MissionService],
})
export class SitesModule {}
