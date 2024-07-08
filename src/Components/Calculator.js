import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Calculator () {

const[open,setOpen] =  useState(true)

    return (
        <>
          <Form.Group className="mb-3">
            <Form.Label> Weight </Form.Label>
            <Form.Control placeholder="enter weight" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label> Activity Level </Form.Label>
            <Form.Select>
              <option>Light Activity 1-2 days of exercise per week</option>
              <option>Moderate Activity 2-3 days of exercise per week</option>
              <option>Highh Activity 3-4 days of exercise per week</option>
            </Form.Select>
          </Form.Group>
          
          <>
          <Button
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
    
          >
            Calculate Protein(g)
          </Button>
          <Collapse in={open}>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
              terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
              labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </Collapse>
        </>
    
          
        </>
      );
    }
    
export default Calculator;