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
} from '@nestjs/common';
import { MissionService } from './mission.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(new JwtAuthGuard('jwt'))
@Controller('missions')
export class MissionController {
  constructor(private readonly missionsService: MissionService) {}

  @Post()
  create(@Body() mission, @Req() req: Request) {
    return this.missionsService.create(req['user'].id, mission);
  }

  @Get()
  findAll(@Req() req: Request) {
    return this.missionsService.findAll(req['user'].id);
  }

  @Get(':id')
  findOne(@Req() req: Request, @Param('id') id: string) {
    return this.missionsService.findOne(req['user'].id, id);
  }

  @Patch(':id')
  update(
    @Req() req: Request,
    @Param('id') id: string,
    @Body() updateMissionDto,
  ) {
    return this.missionsService.update(req['user'].id, id, updateMissionDto);
  }

  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    return this.missionsService.remove(req['user'].id, id);
  }
}
