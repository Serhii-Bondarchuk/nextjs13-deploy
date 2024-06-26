import mongoose, { Document, Schema } from "mongoose";

export interface IProjectModel extends Document {
  name: string;
  description: string;
}

const types = mongoose.Schema.Types

const projectsSchema: Schema = new mongoose.Schema({
  name: {
    type: types.String,
    required: true,
  },
  description: {
    type: types.String,
    required: true,
  },

  url: {
    type: types.String,
    required: true,
  }
})

export const projectsModel = mongoose.models.projects || mongoose.model<IProjectModel>('projects', projectsSchema)
