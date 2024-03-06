import { Schema, Document, Types } from 'mongoose';

export interface Drone extends Document {
  droneId: string;
  createdAt: Date;
  deletedBy?: Types.ObjectId;
  deletedOn?: Date;
  droneType: string;
  makeName: string;
  name: string;
  siteId: Types.ObjectId;
}

const DroneSchema = new Schema<Drone>(
  {
    droneId: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
    deletedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    deletedOn: {
      type: Date,
    },
    droneType: {
      type: String,
      required: true,
    },
    makeName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    siteId: {
      type: Schema.Types.ObjectId,
      ref: 'Site',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default { name: 'Drone', schema: DroneSchema };