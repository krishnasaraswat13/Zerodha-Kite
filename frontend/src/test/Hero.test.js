import React from "react";
import {render, screen} from "@testing-library/react"; //we are using render to render the component and screen to access the elements in the component
import "@testing-library/jest-dom/extend-expect"; //extend expect we are using bcz if there is a delay in rendering the component then it will wait for the component to render before running the test
import Hero from "../landing_page/home/Hero";

describe ("Hero component", () => {
    test("renders the Hero image", () => {
        render(<Hero />); //render the Hero component
        const heroElement = screen.getByAltText("Hero Image"); //get the element with the alt text "Hero Image"
        expect(heroElement).toBeInTheDocument(); //expect the element to be in the document 
        expect(heroElement).toHaveAttribute("src", "media/images/homeHero.png"); //expect the element to have the attribute src with the value "media/images/homeHero.png"
    });
    test("renders signup button", () => {
        render(<Hero />);
        const signupButton = screen.getByRole("button", { name: "Signup Now" });
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    });
});

