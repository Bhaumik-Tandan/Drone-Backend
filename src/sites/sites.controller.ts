import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
  Put,
} from '@nestjs/common';
import { SitesService } from './sites.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(new JwtAuthGuard('jwt'))
@Controller('sites')
export class SitesController {
  constructor(private readonly sitesService: SitesService) {}

  @Post()
  create(@Body() site, @Req() req: Request) {
    return this.sitesService.create(req['user'].id, site);
  }

  @Get()
  findAll(@Req() req: Request) {
    return this.sitesService.findAll(req['user'].id);
  }
  
  @Get(':id/missions')
  getAllMissionsBySite(@Req() req: Request, @Param('id') siteId: string) {
    return this.sitesService.getAllMissionsBySite(req['user'].id, siteId);
  }

  @Get(':id/drones')
  getAllDronesBySite(@Req() req: Request, @Param('id') siteId: string) {
    return this.sitesService.getAllDronesBySite(req['user'].id, siteId);
  }

  @Get(':id')
  findOne(@Req() req: Request, @Param('id') id: string) {
    return this.sitesService.findOne(req['user'].id, id);
  }

  @Put(':id')
  update(@Req() req: Request, @Param('id') id: string, @Body() updateSiteDto) {
    return this.sitesService.update(req['user'].id, id, updateSiteDto);
  }

  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    return this.sitesService.remove(req['user'].id, id);
  }
}
