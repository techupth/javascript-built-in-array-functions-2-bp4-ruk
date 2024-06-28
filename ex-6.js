const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  let lowerCaseCarBrand = carBrand.toLowerCase();
  let index = carCollection.indexOf(lowerCaseCarBrand);
  if (index !== -1) {
    return `${carBrand} already exists in position ${index + 1} of the car collection.`;
  } else {
    carCollection.push(lowerCaseCarBrand);
    let carCollectionString = carCollection.join(", ");
    return `New car collection is: ${carCollectionString}.`;
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.