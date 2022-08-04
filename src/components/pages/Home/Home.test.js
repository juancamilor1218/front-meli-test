import { render } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import * as fetchItem from '../../../core/hooks/useFetchItems'
import { Home } from "./Home";

const mockItems =  [
    {
        categories:["Tecnologia"],
        items:{
            id:'MLA781278',
            title:'Iphone',
            price:{
                currency:'ARS',
                amount:20102301,
                decimals:0        
            },
            picture:'fake picture',
            condition:'new',
            free_shipping:true,
            city:'Buenos aires'
        }
    }
]

const renderWithRouter = component => {
    return {
      ...render(
        <BrowserRouter>
           <Routes>         
                <Route path="/" element={<Home/>} />
            </Routes>
          {component}
        </BrowserRouter>
      ),
    };
  };

describe('<Home  />',()=>{
    let component;

    beforeEach(()=>{
        component = render(<MemoryRouter><Home/></MemoryRouter>)
    })

    xtest('product-list should rendering empty',()=>{        
        expect(component.getByTestId('product-list')).not.toBeInTheDocument();
    })

    test('should get items',async ()=>{
        const getStub = jest.
        spyOn(fetchItem,'useFetchItems')
        .mockResolvedValue({ mockItems});
        
        const {getAllByTestId} = renderWithRouter(<Home></Home>);
        const elements = await waitForElement(() => getAllByTestId('product'));
        expect(getStub).toBeCalled();
        expect(elements.length).toEqual(1);
       
    })
})