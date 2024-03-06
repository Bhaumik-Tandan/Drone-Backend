import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import MissionSchema from './mission.schema';

@Injectable()
export class MissionService {
  constructor(
    @InjectModel(MissionSchema.name) private readonly missionModel: Model<typeof MissionSchema>,
  ) {}

  async create(userId: string, missionData){
    const mission = new this.missionModel({ ...missionData, user: userId });
    return mission.save();
  }

  async findAll(userId: string) {
    return this.missionModel.find({ user: userId }).exec();
  }

  async findOne(userId: string, id: string) {
    try {
      const mission = await this.missionModel.findById(id).exec();

      if (!mission || mission["user"].toString() !== userId) {
        throw new UnauthorizedException('You are not authorized to access this mission');
      }

      return mission;
    } catch (error) {
      throw new UnauthorizedException('You are not authorized to access this mission');
    }
  }

  async update(userId: string, id: string, updateMissionDto: any){
    const updatedMission = await this.missionModel
      .findOneAndUpdate({ _id: id, user: userId }, updateMissionDto, { new: true })
      .exec();

    if (!updatedMission) {
      throw new UnauthorizedException('You are not authorized to update this mission');
    }

    return updatedMission;
  }

  async remove(userId: string, id: string){
    const deletedMission = await this.missionModel.findOneAndRemove({ _id: id, user: userId }).exec();

    if (!deletedMission) {
      throw new UnauthorizedException('You are not authorized to delete this mission or the mission does not exist');
    }

    return deletedMission;
  }
}
