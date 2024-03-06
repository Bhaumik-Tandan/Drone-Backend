import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import SitesSchema from './sites.schema';
import { Model } from 'mongoose';
import { MissionService } from 'src/mission/mission.service';
import { DronesService } from 'src/drones/drones.service';
@Injectable()
export class SitesService {
  constructor(
    @InjectModel(SitesSchema.name)
    private sitesModel: Model<typeof SitesSchema>,
    private readonly missionsService: MissionService,
    private readonly dronesService:DronesService
  ) {}
  async create(user: { _id: string }, siteData) {
    const site = new this.sitesModel({ ...siteData, user });

    return site.save();
  }

  async findAll(user) {
    return this.sitesModel.find({ user }).exec();
  }

  async getAllMissionsBySite(userId, siteId)
  {
    return this.missionsService.getMissionsBySite(userId,siteId);
  }

  async getAllDronesBySite(userId, siteId)
  {
    return this.dronesService.getDronesBySite(userId,siteId);
  }

  async findOne(user, id: string) {
    try {
      const site = await this.sitesModel.findById(id).exec();

      if (!site || site['user'].toString() !== user.toString()) {
        throw new UnauthorizedException(
          'You are not authorized to access this site',
        );
      }

      return site;
    } catch (error) {
      return error;
    }
  }

  async update(user, id: string, updatedSiteData) {
    try {
      const updatedSite = await this.sitesModel
        .findOneAndUpdate({ _id: id, user }, updatedSiteData, { new: true })
        .exec();

      if (!updatedSite) {
        throw new UnauthorizedException(
          'You are not authorized to update this site',
        );
      }

      return updatedSite;
    } catch (error) {
      return error;
    }
  }

  async remove(user, id: string) {
    try {
      const deletedSite = await this.sitesModel
        .findOneAndRemove({ _id: id, user })
        .exec();

      if (!deletedSite) {
        throw new UnauthorizedException(
          'You are not authorized to delete this site or the site does not exist',
        );
      }

      return deletedSite;
    } catch (error) {
      return error;
    }
  }
}
