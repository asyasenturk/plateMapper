// Ülke ve şehir bilgilerini JSON dosyasından import edin
const countryData = require('../data/ulke_sehir.json');  // Doğru yol olmalı

function parsePlate(plate) {
    console.log('Gelen plaka:', plate);

    if (!plate || typeof plate !== 'string' || plate.length < 6) {
        throw new Error('Geçersiz plaka formatı');
    }
    const countryData = require('../data/ulke_sehir.json');

    const countryCode = plate.slice(0, 2);  // İlk iki karakter ülke kodu
    const cityCode = plate.slice(2, 4);     // Sonraki iki karakter şehir kodu
    const licensePlate = plate.slice(4);    // Geri kalan plaka numarası

    // Ülke ve şehir bilgilerini bulma
    const country = countryData.find(country => country.countryCode === countryCode);
    if (!country) {
        throw new Error('Geçersiz ülke kodu');
    }

    const city = country.city.find(city => city.cityCode === cityCode);
    if (!city) {
        throw new Error('Geçersiz şehir kodu');
    }

    return {
        countryCode,
        countryName: country.countryName,
        cityCode,
        cityName: city.cityName,
        licensePlate
    };
}

module.exports = { parsePlate };
