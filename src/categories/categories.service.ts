import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import CategoriesSchema from './categories.schema';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(CategoriesSchema.name) private readonly categoryModel: Model<typeof CategoriesSchema>,
  ) {}

  async create(userId: string, categoryData){
    const category = new this.categoryModel({ ...categoryData, userId });
    return category.save();
  }

  async findAll(userId: string){
    return this.categoryModel.find({ userId }).exec();
  }

  async findOne(userId: string, id: string) {
    try {
      const category = await this.categoryModel.findOne({ _id: id, userId }).exec();
      if (!category) {
        throw new UnauthorizedException('Category not found');
      }
      return category;
    } catch (error) {
      throw new UnauthorizedException('You are not authorized to access this category');
    }
  }

  async update(userId: string, id: string, updatedCategoryData){
    try {
      const updatedCategory = await this.categoryModel
        .findOneAndUpdate({ _id: id, userId }, updatedCategoryData, { new: true })
        .exec();
      if (!updatedCategory) {
        throw new UnauthorizedException('Category not found or you are not authorized to update this category');
      }
      return updatedCategory;
    } catch (error) {
      throw new UnauthorizedException('You are not authorized to update this category');
    }
  }

  async remove(userId: string, id: string) {
    try {
      const deletedCategory = await this.categoryModel
        .findOneAndRemove({ _id: id, userId })
        .exec();
      if (!deletedCategory) {
        throw new UnauthorizedException('Category not found or you are not authorized to delete this category');
      }
      return deletedCategory;
    } catch (error) {
      throw new UnauthorizedException('You are not authorized to delete this category');
    }
  }
}
