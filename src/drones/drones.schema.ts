import { Schema, Document, Types } from 'mongoose';

export interface Drone extends Document {
  deletedBy?: Types.ObjectId;
  deletedOn?: Date;
  droneType: string;
  name: string;
  site: Types.ObjectId;
  category?: Types.ObjectId;
  user: Types.ObjectId;
}

const DroneSchema = new Schema<Drone>(
  {
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
    name: {
      type: String,
      required: true,
    },
    site: {
      type: Schema.Types.ObjectId,
      ref: 'Site',
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
    },
    user: {
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
