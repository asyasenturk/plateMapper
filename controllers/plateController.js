const { parsePlate } = require('../utils/parsePlate');
const Plate = require('../models/Plate');

// POST request: Yeni plaka ekle
exports.addPlate = async (req, res) => {
    const { licensePlate, firstName, lastName } = req.body;

    try {
        // Plaka ayrıştırma işlemi
        const parsedData = parsePlate(licensePlate);

        // MongoDB'ye kaydedilecek veri
        const newPlate = new Plate({
            ...parsedData,
            firstName,
            lastName
        });

        // Veriyi kaydet
        await newPlate.save();
        res.status(201).json({ message: 'Plaka başarıyla kaydedildi', data: newPlate });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// GET request: Tüm plakaları getir
exports.getPlates = async (req, res) => {
    try {
        const plates = await Plate.find();
        res.status(200).json(plates);
    } catch (error) {
        res.status(500).json({ message: 'Veriler getirilemedi' });
    }
};

// PUT request: Plaka güncelle
exports.updatePlate = async (req, res) => {
    const { id } = req.params;
    const { licensePlate, firstName, lastName } = req.body;

    try {
        const updatedPlate = await Plate.findByIdAndUpdate(id, { licensePlate, firstName, lastName }, { new: true });
        res.status(200).json(updatedPlate);
    } catch (error) {
        res.status(400).json({ message: 'Plaka güncellenemedi' });
    }
};

// DELETE request: Plaka sil
exports.deletePlate = async (req, res) => {
    const { id } = req.params;

    try {
        await Plate.findByIdAndDelete(id);
        res.status(200).json({ message: 'Plaka silindi' });
    } catch (error) {
        res.status(400).json({ message: 'Plaka silinemedi' });
    }
};
