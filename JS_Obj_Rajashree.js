var house ={
    type :['condo','individual','ranch','Apartment'],
    rent : 1200,
    isCarParkingAvailable : true,
    parkingType : ['street','Covered'],
    Bed : 3,
    Bath : 2.5,
    Address : {
    Address1 : "123 mill drive",
    Address2 : 'C10',
    city: 'Hartford',
    state: 'CT',
    zipCode: '06103',
    country : 'USA',
    }
}
console.log(house)
console.log(house.parkingType[1])
console.log(house.Address.zipCode)