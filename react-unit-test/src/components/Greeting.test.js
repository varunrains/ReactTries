import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Greeting from "./Greeting";

//Test suites
//This is one suite
describe('Greeting component', () => {

    //One test under "Greeting Component" test suites
    //Once your application grows you need to definitely 
    //group your unit tests in a test suite.
    test('renders Hello World as a text', () => {
        //Arrange
        render(<Greeting />);

        //Act
        //..nothing in this component

        //Assert --> Look into the virtual DOM
        //exact: true --> Match the text
        const helloWorldElement = screen.getByText('Hello World!', { exact: true });
        expect(helloWorldElement).toBeInTheDocument();
        //You can invert the test by adding the .not
        //expect(helloWorldElement).not.toBeInTheDocument();

    });

    test('renders good to see you if the button was NOT clicked', () => {
        render(<Greeting />);
        const outputElement = screen.getByText('It\'s good to see you!', { exact: true });
        expect(outputElement).toBeInTheDocument();
    });

    test('renders "Changed!" if the button was clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const outputElement = screen.getByText('Changed!', { exact: true });
        expect(outputElement).toBeInTheDocument();
    });

    test('Does not render "good to see you" if the button was clicked', () => {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const outputElement = screen.queryByText('good to see you', { exact: true });
        expect(outputElement).toBeNull();
    });




})


