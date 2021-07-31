import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Async from './Async';

describe('Async component', () => {
    test('renders posts if request succeeds', async() => {
        //"jest" is a built in object available when running unit tests in react
        //".fn" will allow you to create a function that is a mock
        window.fetch = jest.fn();
        //We can call special functions now, and you configure the way you get 
        //your response to be
        //Now we are over-riding the built in fetch method our own method
        //Now we are reducing the network traffic
        //We can control different out-comes -- So using of mock is not a bad idea
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id:'p1', title:'First Post'}]
        });
        render(<Async />);

        //Assert
        //All find methods returns the Promise
        //This is the best fit when testing any Async code
        //Where the testing framework will check for the data that it receives couple of times
        //Default time-out is 1s
        const listItemElements = await screen.findAllByRole('list');
        expect(listItemElements).not.toHaveLength(0);

    });

});