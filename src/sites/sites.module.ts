import { Module } from '@nestjs/common';
import { SitesService } from './sites.service';
import { SitesController } from './sites.controller';
import { MongooseModule } from '@nestjs/mongoose';
import SitesSchema from './sites.schema';

@Module({
  imports:[MongooseModule.forFeature([SitesSchema])],
  controllers: [SitesController],
  providers: [SitesService]
})
export class SitesModule {}
