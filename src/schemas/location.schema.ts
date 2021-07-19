import * as mongoose from 'mongoose';

export const LocationSchema = new mongoose.Schema(
  {
    locationName: { type: String, required: true },
    website: String,
    description: { type: String, required: true },
    phone: { type: String, required: true },
    person: { type: String, required: true },
    coordinates: {
      x: { type: Number, required: true },
      y: { type: Number, required: true },
    },
  },
  { timestamps: { createdAt: true, updatedAt: true } },
);
