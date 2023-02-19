import React from "react"
import "../../styles/findCar.css"
import { Form, FormGroup } from "reactstrap";

const FindCar = () => {
    return (
        <Form className="form">
          <div className=" d-flex align-items-center justify-content-between flex-wrap">
            <FormGroup className="form__group">
              <input type="text"  />
            </FormGroup>
    
            <FormGroup className="form__group">
              <input type="text"  />
            </FormGroup>
    
            <FormGroup className="form__group">
              <input type="date" />
            </FormGroup>
    
            <FormGroup className="form__group">
              <input
                className="journey__time"
                type="time"
                placeholder="Journey time"
                required
              />
            </FormGroup>
            <FormGroup className="select__group">
              <select>
                <option value="ac">AC Car</option>
                <option value="non-ac">Non AC Car</option>
              </select>
            </FormGroup>
    
            <FormGroup className="form__group">
              <button className="btn find__car-btn">Find Car</button>
            </FormGroup>
          </div>
        </Form>
      );
}

export default FindCar;