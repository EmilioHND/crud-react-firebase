import { Container, Form, Button } from "react-bootstrap";

const LinkForm = () => {
  return (
    //Formulario
    <Container className="border mt-3 p-5 rounded bg-primary">
      <h2 className="text-white mt-2">CRUD URL</h2>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" placeholder="http//:example.com" className="mt-3" />
          <Form.Control type="text" placeholder="Nombre de la web" className="mt-3" />
          <Form.Control as="textarea" rows={3} className="mt-3"/>
        </Form.Group>
      </Form>

      <Button variant="success">Guardar</Button>
      <Button className="ml-1" variant="danger">Eliminar</Button>
      <Button className="ml-1" variant="secondary">Restaurar</Button>
    </Container>
  );
};
export default LinkForm;