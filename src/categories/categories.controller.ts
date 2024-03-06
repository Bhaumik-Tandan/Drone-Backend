import { Controller, Get, Post, Body, Patch, Param, Delete, Req, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(new JwtAuthGuard('jwt'))
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  create(@Body() category, @Req() req: Request) {
    return this.categoriesService.create(req['user'].id, category);
  }

  @Get()
  findAll(@Req() req: Request) {
    return this.categoriesService.findAll(req['user'].id);
  }

  @Get(':id')
  findOne(@Req() req: Request, @Param('id') id: string) {
    return this.categoriesService.findOne(req['user'].id, id);
  }

  @Patch(':id')
  update(@Req() req: Request, @Param('id') id: string, @Body() updatedCategory) {
    return this.categoriesService.update(req['user'].id, id, updatedCategory);
  }

  @Delete(':id')
  remove(@Req() req: Request, @Param('id') id: string) {
    return this.categoriesService.remove(req['user'].id, id);
  }
}
