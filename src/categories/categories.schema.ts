import { Schema, Document, Types } from 'mongoose';

export interface Category extends Document {
  name: string;
  color: string;
  tag_name: string;
  userId: Types.ObjectId;
}

const CategorySchema = new Schema<Category>(
  {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    tag_name: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default { name: 'Category', schema: CategorySchema };
