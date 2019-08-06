import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';

export default function Layout  (props)
{
   return(
  <Container fluid className="jumbo">
   {props.children}
  </Container>
);
}
