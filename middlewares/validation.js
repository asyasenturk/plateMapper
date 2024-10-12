exports.validatePlateInput = (req, res, next) => {
    const { licensePlate, firstName, lastName } = req.body;

    if (!licensePlate || !firstName || !lastName) {
        return res.status(400).json({ message: 'Tüm alanlar zorunludur' });
    }

    next();
};
