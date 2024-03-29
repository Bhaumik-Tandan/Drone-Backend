import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import DronesSchema from './drones.schema';

@Injectable()
export class DronesService {
  constructor(
    @InjectModel(DronesSchema.name)
    private readonly droneModel: Model<typeof DronesSchema>,
  ) {}

  async create(user, droneData) {
    const drone = new this.droneModel({ ...droneData, user });

    return drone.save();
  }

  async findAll(user) {
    return this.droneModel.find({ user, deletedAt: null }).exec();
  }

  async getDronesByCategory(userId, category)
  {
    return this.droneModel.find({ user: userId,category}).exec();
  }

  async findOne(user, id: string) {
    try {
      const drone = await this.droneModel.findById(id).exec();

      if (
        !drone ||
        drone['user'].toString() !== user.toString() ||
        drone['deletedAt']
      ) {
        throw new UnauthorizedException(
          'You are not authorized to access this drone',
        );
      }

      return drone;
    } catch (error) {
      return error;
    }
  }

  async getDronesBySite(userId, siteId) {
    return this.droneModel.find({ user: userId, site: siteId }).exec();
  }

  async update(user, id: string, updatedDroneData) {
    try {
      const updatedDrone = await this.droneModel
        .findOneAndUpdate({ _id: id, user }, updatedDroneData, { new: true })
        .exec();

      if (!updatedDrone) {
        throw new UnauthorizedException(
          'You are not authorized to update this drone',
        );
      }

      return updatedDrone;
    } catch (error) {
      return error;
    }
  }

  async partialUpdate(user, id: string, partialField) {
    try {
      const updatedDrone = await this.droneModel
        .updateOne({ _id: id, user }, { $set: partialField }, { new: true })
        .exec();

      return updatedDrone;
    } catch (error) {
      throw error;
    }
  }

  async remove(user, id: string) {
    try {
      const currentDate = new Date();

      this.droneModel
        .updateOne(
          { _id: id, user },
          { $set: { deletedBy: user, deletedOn: currentDate } },
          { new: true },
        )
        .exec();

      return { _id: id, deletedBy: user, deletedOn: currentDate };
    } catch (error) {
      throw error;
    }
  }
}
