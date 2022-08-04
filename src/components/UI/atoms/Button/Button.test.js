import { Button } from "./button";
import { fireEvent, render } from "@testing-library/react";

const makeSut = (props) => {
  return render(<Button text="text"  />);
};


describe("<Button />", () => {

    let component;
    beforeEach(()=>{
      component = render(<Button text={'My Button'}></Button>)
    })

    test("Should render label correctly", () => {    
      expect(component.getByText("My Button")).toBeInTheDocument();
    });
     
});