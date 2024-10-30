

import React, { useState } from "react";
import { Container, Card, Accordion, Image, Navbar } from 'react-bootstrap';

function Home() {
    const [openItem, setOpenItem] = useState(null);

    const handleToggle = (itemIndex) => {
        setOpenItem(openItem === itemIndex ? null : itemIndex);
    };

    return (
        <>
            <div className="background">
                <Image className="home-image" alt="pro" src="https://media.istockphoto.com/id/1299421162/photo/diet-and-exercise-for-weight-loss.jpg?s=612x612&w=0&k=20&c=t27MP4tiYbFKGdggpNV57CZZ9WfPD6ctzmyHZIto-F0=" fluid />
            </div>
            <Container>
                <Navbar id="button-calc">
                    <Container>
                        <Navbar.Brand href="/proteinPortal">Take me to the Protein Portal!</Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>

            <Card className="background">
                <Card.Body>
                    <h1>Why do we need protein?</h1>
                    <h3>
                        Protein is a vital component of the human body that has many health benefits. It is beneficial for brain function, skin, hair and nails, and body composition.
                    </h3>
                    <Accordion>
                        <Accordion.Item>
                            <Accordion.Header onClick={() => handleToggle(0)}>Brain and Neurological Benefits</Accordion.Header>
                            {openItem === 0 && (
                                <Accordion.Body>
                                    <p>Proteins in our diet affect brain performance because they provide the amino acids (simply put, protein is made of amino acids) that make up our neurotransmitters. Think of neurotransmitters as biochemical messengers whose job it is to carry signals from one brain cell to another. These brain cells then transmit various signals to the different parts of the body to carry out their individual tasks. The better these messengers are fed, the more efficiently they deliver the goods.</p>
                                    
                                    <p>Protein – amino acids – are also essential for our happiness. When we don’t eat enough good protein, the brain can’t produce enough neurotransmitters such as serotonin, which is one of the main chemicals which regulates our moods. Some doctors practicing in natural medicine believe that amino acid therapy is more effective in some cases than traditional drugs used to treat depression. Eating good sources of protein helps to boost our levels of serotonin and dopamine, which helps to boost energy, mental clarity, and basically make you feel happier, as well as regulate pain, reduce anxiety, and initiate deep sleep.</p>
                                </Accordion.Body>
                            )}
                        </Accordion.Item>

                        <Accordion.Item>
                            <Accordion.Header onClick={() => handleToggle(1)}>Skin, Hair, and Nails</Accordion.Header>
                            {openItem === 1 && (
                                <Accordion.Body>
                                    <p>Our skin, hair, and nails are affected by what we eat. When we’re eating an unhealthy diet, it affects our collagen, keratin, and elastin, three of the most abundant proteins in our bodies, which in turn affects the health of our skin, hair, and nails.</p>
                                    
                                    <p>Collagen is a big contributor to our skin health — our collagen production drops as we age, which contributes to wrinkles and sagging skin. Collagen production starts with procollagen, a molecule made from vitamin C and protein. These molecules bind together to create fibrils, which accumulate until they become structured collagenous fibers, providing the structural element to our skin, hair, and nails.</p>
                                    
                                    <p>Hair is primarily made up of a protein called keratin, which is also the structural protein found in our nails and skin. When we’re eating too few calories and protein, or eating an unhealthy diet, our hair, skin, and nail health suffers as it is not the body’s priority. This can lead to slow hair growth, dry, brittle, and weak hair, and prolonged calorie restriction may even lead to hair loss.</p>
                                </Accordion.Body>
                            )}
                        </Accordion.Item>

                        <Accordion.Item>
                            <Accordion.Header onClick={() => handleToggle(2)}>Body Composition</Accordion.Header>
                            {openItem === 2 && (
                                <Accordion.Body>
                                    <p>Protein makes you burn more calories (increases 'calories out') due to the high thermic effect and a positive effect on resting energy expenditure and maintaining lean muscle. A high protein intake tends to boost metabolism.</p>
                                    
                                    <p>Protein is the building block of your muscles. Eating adequate amounts of protein helps you maintain your muscle mass and promotes muscle growth when you do strength training. Numerous studies show that eating plenty of protein can help increase muscle mass and strength. If you’re physically active, lifting weights, or trying to gain muscle, you need to make sure you’re getting enough protein. Keeping protein intake high can also help prevent muscle loss during weight loss.</p>
                                    
                                    <p>One of the consequences of aging is that your muscles gradually weaken. The most severe cases are referred to as age-related sarcopenia, which is one of the main causes of frailty, bone fractures, and reduced quality of life among older adults. Eating more protein is one of the best ways to reduce age-related muscle deterioration and prevent sarcopenia. Staying physically active is also crucial, and lifting weights or doing some sort of resistance exercise can work wonders.</p>
                                </Accordion.Body>
                            )}
                        </Accordion.Item>
                    </Accordion>
                </Card.Body>
            </Card>
        </>
    );
}

export default Home;

