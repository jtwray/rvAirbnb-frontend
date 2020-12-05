import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import ListingCard from "./ListingCard";

export default function Listings() {
  const [listings, setListings] = useState(newListings);

  useEffect(()=>{

    newListings.length>1&&setListings(newListings)
  },[])

  //   useEffect(() => {
  //     axiosWithAuth()
  //       .get("/api/listing")
  //       .then((res) => setListings(res.data.listings))
  //       .catch((e) => console.error(e));
  //   }, []);

  return (
    <section>
      {listings
        ? listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))
        : ""}
    </section>
  );
}





const new_amenities = [
  {
    guests: 5,
    beds: 4,
    bath: 3,
    wifi: true,
    kitchen: false,
    heat: true,
    water: true,
    shower: true,
    firepit: false,
  },
  {
    guests: 14,
    beds: 8,
    bath: 1,
    wifi: false,
    kitchen: true,
    heat: true,
    water: false,
    shower: true,
    firepit: true,
  },
  {
    guests: 3,
    beds: 3,
    bath: 1,
    wifi: false,
    kitchen: false,
    heat: true,
    water: true,
    shower: false,
    firepit: false,
  },
  {
    guests: 5,
    beds: 3,
    bath: 2,
    wifi: true,
    kitchen: false,
    heat: true,
    water: false,
    shower: true,
    firepit: false,
  },
  {
    guests: 10,
    beds: 7,
    bath: 2,
    wifi: false,
    kitchen: true,
    heat: true,
    water: false,
    shower: true,
    firepit: true,
  },
  {
    guests: 6,
    beds: 3,
    bath: 3,
    wifi: true,
    kitchen: true,
    heat: true,
    water: true,
    shower: true,
    firepit: false,
  },
  {
    guests: 3,
    beds: 2,
    bath: 1,
    wifi: false,
    kitchen: true,
    heat: false,
    water: true,
    shower: true,
    firepit: false,
  },
  {
    guests: 4,
    beds: 4,
    bath: 2,
    wifi: true,
    kitchen: true,
    heat: true,
    water: true,
    shower: true,
    firepit: false,
  },
  {
    guests: 12,
    beds: 5,
    bath: 3,
    wifi: false,
    kitchen: false,
    heat: false,
    water: true,
    shower: true,
    firepit: false,
  },
  {
    guests: 7,
    beds: 7,
    bath: 2,
    wifi: false,
    kitchen: true,
    heat: true,
    water: true,
    shower: true,
    firepit: true,
  },
  {
    guests: 14,
    beds: 7,
    bath: 3,
    wifi: true,
    kitchen: false,
    heat: false,
    water: false,
    shower: true,
    firepit: false,
  },
  {
    guests: 12,
    beds: 2,
    bath: 1,
    wifi: true,
    kitchen: true,
    heat: false,
    water: true,
    shower: false,
    firepit: true,
  },
  {
    guests: 15,
    beds: 11,
    bath: 3,
    wifi: false,
    kitchen: true,
    heat: true,
    water: true,
    shower: false,
    firepit: false,
  },
  {
    guests: 8,
    beds: 7,
    bath: 1,
    wifi: false,
    kitchen: false,
    heat: true,
    water: true,
    shower: true,
    firepit: true,
  },
  {
    guests: 7,
    beds: 6,
    bath: 2,
    wifi: false,
    kitchen: true,
    heat: false,
    water: true,
    shower: false,
    firepit: false,
  },
  {
    guests: 3,
    beds: 2,
    bath: 3,
    wifi: true,
    kitchen: true,
    heat: true,
    water: true,
    shower: false,
    firepit: false,
  },
  {
    guests: 4,
    beds: 4,
    bath: 2,
    wifi: true,
    kitchen: false,
    heat: true,
    water: true,
    shower: false,
    firepit: false,
  },
  {
    guests: 15,
    beds: 9,
    bath: 3,
    wifi: true,
    kitchen: true,
    heat: false,
    water: true,
    shower: true,
    firepit: false,
  },
  {
    guests: 7,
    beds: 3,
    bath: 3,
    wifi: false,
    kitchen: false,
    heat: true,
    water: true,
    shower: true,
    firepit: false,
  },
  {
    guests: 14,
    beds: 12,
    bath: 3,
    wifi: false,
    kitchen: true,
    heat: false,
    water: true,
    shower: false,
    firepit: false,
  },
  {
    guests: 5,
    beds: 2,
    bath: 1,
    wifi: false,
    kitchen: true,
    heat: true,
    water: false,
    shower: false,
    firepit: false,
  },
  {
    guests: 10,
    beds: 2,
    bath: 1,
    wifi: true,
    kitchen: true,
    heat: false,
    water: true,
    shower: true,
    firepit: true,
  },
  {
    guests: 6,
    beds: 5,
    bath: 2,
    wifi: true,
    kitchen: false,
    heat: true,
    water: true,
    shower: false,
    firepit: false,
  },
  {
    guests: 7,
    beds: 2,
    bath: 2,
    wifi: false,
    kitchen: true,
    heat: true,
    water: false,
    shower: false,
    firepit: true,
  },
  {
    guests: 7,
    beds: 6,
    bath: 3,
    wifi: false,
    kitchen: false,
    heat: true,
    water: true,
    shower: false,
    firepit: true,
  },
];
const listings = [
  {
    id: 7,
    description:
      "Beautiful clean 2017 5th wheel with one bedroom and a full size pull out couch/ bed that is perfect for kids. Located close to Horseshoe Lake with all the amenities of home.",
    price: "$201.41",
    photo: "https://i.imgur.com/hCA9ZwX.jpg",
    location: "2860-613",
    amenities: "electricity",
    landowner_id: 5,
  },
  {
    id: 8,
    description: "non-volatile",
    price: "$159.90",
    photo: "https://i.imgur.com/oGncYsR.jpg",
    location: "309642",
    amenities: "restrooms",
    landowner_id: 6,
  },
  {
    id: 9,
    description:
      "Our RV is a 2008 Forest River 5th wheel. It has an open floor plan perfect for medium size families or a small group of friends. The bedroom has a queen bed and tons of storage space. A full size air mattress is provided for the living room and the dinette folds down into a twin bed perfect for kiddos. The living room couch, while not the most comfortable for adults, could be used as a bed for children. The RV is blizzard proof and stays cozy warm for all those ski weekends!",
    price: "$118.96",
    photo: "https://i.imgur.com/bMPEl58.jpg",
    location: "89094",
    amenities: "WiFi",
    landowner_id: 2,
  },
  {
    id: 13,
    description: "Progressive",
    price: "$271.88",
    photo: "https://i.imgur.com/ZwXXHZf.jpg",
    location: "357509",
    amenities: "water",
    landowner_id: 17,
  },
  {
    id: 14,
    description: "bifurcated",
    price: "$54.15",
    photo: "https://i.imgur.com/27rhlxH.jpg",
    location: "67195",
    amenities: "WiFi",
    landowner_id: 13,
  },
  {
    id: 15,
    description: "synergy",
    price: "$274.28",
    photo: "https://i.imgur.com/53oXIGq.jpg",
    location: "73124",
    amenities: "showers",
    landowner_id: 12,
  },
  {
    id: 16,
    description: "system engine",
    price: "$76.66",
    photo: "https://i.imgur.com/SOamOMF.jpg",
    location: '591 99"',
    amenities: "water",
    landowner_id: 2,
  },
  {
    id: 18,
    description: "Optimized",
    price: "$46.15",
    photo: "https://i.imgur.com/fqkyi8O.jpg",
    location: "89094",
    amenities: "WiFi",
    landowner_id: 12,
  },
  {
    id: 19,
    description: "solution",
    price: "$106.11",
    photo: "https://i.imgur.com/Zq6sanZ.jpg",
    location: "89094",
    amenities: "water",
    landowner_id: 12,
  },
  {
    id: 20,
    description: "optimizing",
    price: "$69.28",
    photo: "https://i.imgur.com/gNtMkpU.jpg",
    location: "89094",
    amenities: "WiFi",
    landowner_id: 3,
  },
  {
    id: 12,
    description:
      "Stay in our 1 year old 37ft Keystone Cougar. Parked right at the Tontitown Winery. Enjoy live music and food trucks on Friday and Saturday nights through the summer and live music only, on Wednesday night. Also free wine tasting 7 days a week.Private entrance in the back.Close to everything in Northwest Arkansas.The RV has two bedrooms with one queen bed and two smaller bunk style beds in second bedroom. Also two love seats fold out to make extra sleeping for kids.",
    price: "$275.18",
    photo: "https://i.imgur.com/yhFYwHv.jpg",
    location: "2930",
    amenities: "WiFi,Firepit,Showers",
    landowner_id: 17,
  },
];

let newListings = [];

for (let listing of listings) {
  let newListing = { ...listing, amenities: { ...new_amenities[listing.id] } };
  newListings.push(newListing);
}