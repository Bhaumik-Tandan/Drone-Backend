import { Controller, Get, Post, Body, Put, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { MissionService } from 'src/mission/mission.service';
import { DronesService } from 'src/drones/drones.service';

@UseGuards(new JwtAuthGuard('jwt'))
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService,private readonly missionsService: MissionService,private readonly dronesService: DronesService) {}

  @Post()
  create(@Body() category, @Req() req: Request) {
    return this.categoriesService.create(req['user'].id, category);
  }

  @Get()
  findAll(@Req() req: Request) {
    return this.categoriesService.findAll(req['user'].id);
  }

  @Get(':categoryId/missions')
  async getMissionsByCategory(@Req() req: Request,@Param('categoryId') categoryId: string) {
    return this.missionsService.getMissionsByCategory(req['user'].id,categoryId);
  }

  @Get(':categoryId/drones')
  async getDronesByCategory(@Req() req: Request,@Param('categoryId') categoryId: string) {
    return this.dronesService.getDronesByCategory(req['user'].id,categoryId);
  }

  @Get(':id')
  findOne(@Req() req: Request, @Param('id') id: string) {
    return this.categoriesService.findOne(req['user'].id, id);
  }

  @Put(':id')
  update(@Req() req: Request, @Param('id') id: string, @Body() updatedCategory) {
    return this.categoriesService.update(req['user'].id, id, updatedCategory);
  }

  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    return this.categoriesService.remove(req['user'].id, id);
  }
}
