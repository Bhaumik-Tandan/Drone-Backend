import { Schema } from 'mongoose';

const SiteSchema = new Schema(
  {
    site_name: {
      type: String,
      required: true,
    },
    position: {
      latitude: {
        type: String,
        required: true,
      },
      longitude: {
        type: String,
        required: true,
      },
    },
    user:{
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

export default { name: 'Site', schema: SiteSchema };
