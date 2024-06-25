// import mongoose from "mongoose";

// global.mongoose = {
//   connection: null,
//   promiseConnect: null,
// }

// export async function dbConnection() {
//   if (global.mongoose && global.mongoose.connection) {
//     console.log('Connection from previous')
//     return global.mongoose.connection
//   } else {
//     const connUrl = process.env.MONGO_URL
//     console.log(connUrl, 'connUrl11111111111')
//     if (connUrl) {
//       const promiseConnect = mongoose.connect(connUrl, {
//         autoIndex: true,
//       })
//       global.mongoose = {
//         connection: await promiseConnect,
//         promiseConnect
//       }
//       console.log('New MongoDb connected...')
//       return await promiseConnect

//     } else {
//       console.log('Monitordb url is undefined')
//     }
//   }
// }