import mongoose from "mongoose";

const connection: { isConnected?: number } = {}

export const dbConnect = async () => {
  if (connection.isConnected) {
    return `MongoDB is already connected...`
  }
  const MONGO_URL = process.env.MONGO_URL!
  let db
  try {
    db = await mongoose.connect(MONGO_URL, {
      autoIndex: true,
      dbName: 'next'
    })

  } catch (error) {
    return new Error("Couldn't connect to MongoDB'")
  }
  console.log('Mongo DB url is', MONGO_URL)
  return `MongoDB is connected...`
}
