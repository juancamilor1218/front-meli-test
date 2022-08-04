import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Header } from "./Header"

describe('<Header />',()=>{

    let component; 
    beforeEach(()=>{
        component = render(<MemoryRouter><Header/></MemoryRouter>)
    })


    test('should navigate to the route search with the correct parameter',()=>{
        const form = component.getByRole('form');
        fireEvent.change(component.getByPlaceholderText("Nunca pares de buscar"),{target: {value: 'Iphone'}});
        fireEvent.click(form);        
        
    })
})