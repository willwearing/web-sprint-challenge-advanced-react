import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const header = screen.getByText(/checkout form/i);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", async () => {
  render(<CheckoutForm />);

  //find all the labels
  const firstName = screen.getByLabelText(/first name/i);
  const lastName = screen.getByLabelText(/last name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zip = screen.getByLabelText(/zip/i);
  //find the button
  const button = screen.getByRole("button");

  //fill the inputs
  fireEvent.change(firstName, { target: { value: "Will" } });
  fireEvent.change(lastName, { target: { value: "Wearing" } });
  fireEvent.change(address, { target: { value: "123 Fake St" } });
  fireEvent.change(city, { target: { value: "Fake City" } });
  fireEvent.change(state, { target: { value: "Statehood" } });
  fireEvent.change(zip, { target: { value: "12345" } });

  //fire the button on click for submit
  fireEvent.click(button);

  //check if the success message pops up

  expect(await screen.findByText(/you have ordered/i)).toBeInTheDocument();
});
