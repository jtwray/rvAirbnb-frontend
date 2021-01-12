import React from "react";
import Login from "../../Login";
import { render, fireEvent, screen, getByRole, getAllByRole } from "@testing-library/react";
import "@testing-library/jest-dom";
import ListingCard from "../../listings/ListingCard";



test("Listing renders data and image from api", async () => {
  const { rerender} = render( <ListingCard listings={mockListings} /> );


test("renders listing amenities from API", () => {
    const { rerender } = render(<ListingCard listing=[] />);
  
    expect( screen.getAllByRole('li').toHaveLength(0) )
    expect( screen.getByRole('h2').toHaveTextContent(/loading spinner/i) )

    // We will rerender the component with our dummy data passed in as the new props

    rerender(<ListingCard listing={mockListings[0]} />);

    // Assert that we now have listing amenitites rendering
  
  
    expect(getAllByRole("li").toHaveLength(9);
  });
test("ListingCard redirects to SingleListingCard onclick", async () => {
   render( <ListingCard listings={mockListings} />);

  fireEvent.click(screen.getByRole("button"));

  const dashboardGreeting = await screen.findByRole("h2");

  expect(dashboardGreeting).toHaveTextContent(
    /here's the skinny on this wonderful slice of paradise/i
  );
});


  const mockListings =  [
      {
        id: 7,
        description:
          "Beautiful clean 2017 5th wheel with one bedroom and a full size pull out couch/ bed that is perfect for kids. Located close to Horseshoe Lake with all the amenities of home.",
        price: "$201.41",
        photo: "https://i.imgur.com/hCA9ZwX.jpg",
        location: "2860-613",
        amenities: {
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
        landowner_id: 5,
      },
    ]