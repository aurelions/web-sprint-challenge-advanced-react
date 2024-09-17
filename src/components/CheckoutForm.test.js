import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const checkoutHeader = screen.getByText(/Checkout Form/i)
    const firstN = screen.getByLabelText(/First Name/i)
    const lastN = screen.getByLabelText(/Last Name/i)
    const addy = screen.getByLabelText(/Address/i)
    const city = screen.getByLabelText(/City/i)
    const state = screen.getByLabelText(/State/i)
    const zip = screen.getByLabelText(/Zip/i)
    const checkButton = screen.getByRole('button', { name: /checkout/i})

    //expect

    expect(checkoutHeader).toBeInTheDocument();
    expect(firstN).toBeInTheDocument();
    expect(lastN).toBeInTheDocument();
    expect(addy).toBeInTheDocument();
    expect(city).toBeInTheDocument();
    expect(state).toBeInTheDocument();
    expect(zip).toBeInTheDocument();
    expect(checkButton).toBeInTheDocument();

    //visibility
    expect(checkoutHeader).toBeVisible();
    expect(firstN).toBeVisible();
    expect(lastN).toBeVisible();
    expect(addy).toBeVisible();
    expect(city).toBeVisible();
    expect(state).toBeVisible();
    expect(zip).toBeVisible();
    expect(checkButton).toBeVisible();
    
});

test("form shows success message on submit with form details", () => {
    //helpers
    const firstN = screen.getByLabelText(/First Name/i)
    const lastN = screen.getByLabelText(/Last Name/i)
    const addy = screen.getByLabelText(/Address/i)
    const city = screen.getByLabelText(/City/i)
    const state = screen.getByLabelText(/State/i)
    const zip = screen.getByLabelText(/Zip/i)
    const checkButton = screen.getByRole('button', { name: /checkout/i})

    //userEvents 
    userEvent.type(firstN, "Trevor")
    userEvent.type(lastN, "Mandina")
    userEvent.type(addy, "my house")
    userEvent.type(city, "Yankton")
    userEvent.type(zip, "SD")
    userEvent.click(checkButton)

    //screen stuff
    const succeeded = screen.getByText(/woo hoo/i)
    const user = screen.getByText(/Trevor/i)

    expect(succeeded).toBeTruthy()
    expect(succeeded).toBeInTheDocument()
    expect(succeeded).toBeVisible()

    expect(user).toBeTruthy()
    expect(user).toBeInTheDocument()
    expect(user).toBeVisible()
    
});
