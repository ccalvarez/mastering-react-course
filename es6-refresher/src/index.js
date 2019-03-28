const address = {
  street: '2167 Strasse',
  city: 'Berlin',
  country: 'Germany',
};

// const street = address.street;
// const city = address.city;
// const country = address.country;

// const { street, city, country } = address;
const { street: st, city, country } = address;

console.log(`Street: ${st}, City: ${city}, Country: ${country}`);
