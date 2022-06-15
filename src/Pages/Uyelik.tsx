import React from "react";
import { useInput } from "../hooks/userInput";
import { Button, Form } from "react-bootstrap";
const Uyelik = () => {
  const [inputs, setInputs] = useInput({ name: "", age: "" });

  return (
    <div className="container-fluid">
        <ul className="list-group">
  <li className="list-group-item "> Adı: {inputs.name}</li>
  <li className="list-group-item"> Yaş :{inputs.age}</li>
</ul>
      <div className="row">
        <div className="col-md-12">
          <h1>Üyelik</h1>
          <div className="container">
            <Form>
              <div className="form-group">
                <label htmlFor="name">Adınız</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  value={inputs.name}
                  onChange={setInputs}
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">Yaşınız</label>
                <input
                  type="text"
                  name="age"
                  className="form-control"
                  placeholder="age"
                  value={inputs.age}
                  onChange={setInputs}
                />
                 <Form.Text id="passwordHelpBlock" muted>
    Your password must be 8-20 characters long, contain letters and numbers, and
    must not contain spaces, special characters, or emoji.
  </Form.Text>
              </div>
              <div className="form-group">
                <Button variant="primary">Primary</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uyelik;
