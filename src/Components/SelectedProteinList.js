
import React from "react"
import SelectedProteinItem from "./SelectedProteinItem"


import { Container, ListGroup } from "react-bootstrap";
import { useCalcContext } from './CalcContext';

function SelectedProteinList({ selectedProteinList, setSelectedProteinList }) {
    const { calcGrams } = useCalcContext();

    function remove(cat, name, serv, gr) {
        const thisProtein = selectedProteinList.find(p => p.category === cat && p.name === name && p.serving === serv && p.grams === gr);
        const newList1 = selectedProteinList.filter((protein) => protein !== thisProtein);
        setSelectedProteinList(newList1);
    }

    const selectedOriginalList = selectedProteinList.map((protein) => (
        <SelectedProteinItem key={protein.id} name={protein.name} category={protein.category} serving={protein.serving} grams={protein.grams} onRemove={remove} />
    ));

    const total = selectedProteinList.reduce((total, protein) => total + protein.grams, 0);

    const message = total < calcGrams || calcGrams === 0 || calcGrams === undefined ? "Need more protein" : "Got enough";
    const messageColor = message === "Need more protein" ? "color-change-red" : "color-change-green";

    return (
        <Container>
          
            <ListGroup>
                <ListGroup.Item as="ul" className="d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{selectedOriginalList}</div>
                        <h3>Total grams of Protein = {total}</h3>
                        <p className={messageColor}>{message}</p>
                        <p>{calcGrams}</p>
                    </div>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
}

export default SelectedProteinList;