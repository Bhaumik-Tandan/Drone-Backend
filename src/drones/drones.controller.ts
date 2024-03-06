import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards, Put } from '@nestjs/common';
import { DronesService } from './drones.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(new JwtAuthGuard('jwt'))
@Controller('drones')
export class DronesController {
  constructor(private readonly dronesService: DronesService) {}

  @Post()
  create(@Body() drone, @Req() req: Request) {
    return this.dronesService.create(req['user'].id, drone);
  }

  @Get()
  findAll(@Req() req: Request) {
    return this.dronesService.findAll(req['user'].id);
  }

  @Get(':id')
  findOne(@Req() req: Request, @Param('id') id: string) {
    return this.dronesService.findOne(req['user'].id, id);
  }

  @Put(':id')
  update(@Req() req: Request, @Param('id') id: string, @Body() updateDroneDto) {
    return this.dronesService.update(req['user'].id, id, updateDroneDto);
  }

  @Patch(':id')
  partialUpdate(@Req() req: Request, @Param('id') id: string, @Body() updateDroneDto) {
    return this.dronesService.update(req['user'].id, id, updateDroneDto);
  }

  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    return this.dronesService.remove(req['user'].id, id);
  }
}
