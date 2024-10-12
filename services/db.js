const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(  "mongodb+srv://asyasenturk:12345@asya.k5i1t.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB bağlantısı başarılı');
  } catch (error) {
    console.error('Veritabanı bağlantı hatası:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
