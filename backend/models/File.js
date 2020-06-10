import mongoose from 'mongoose';

export const File = mongoose.model('File', {
  name: String,
  description: String,
  date: Date,
  type: String,
  author: String,
  size: String,
});
