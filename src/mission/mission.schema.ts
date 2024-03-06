import { Schema, Document, Types } from 'mongoose';

export interface Mission extends Document {
  alt: number;
  speed: number;
  name: string;
  waypoints: {
    alt: number;
    lat: number;
    lng: number;
  }[];
  site: Types.ObjectId;
  category?: Types.ObjectId; 
  user:Types.ObjectId;
}

const MissionSchema = new Schema<Mission>(
  {
    alt: {
      type: Number,
      required: true,
    },
    speed: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    waypoints: {
      type: [
        {
          alt: Number,
          lat: Number,
          lng: Number,
        },
      ],
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
    user:{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }
  },
  {
    timestamps: true,
  },
);

export default { name: 'Mission', schema: MissionSchema };
