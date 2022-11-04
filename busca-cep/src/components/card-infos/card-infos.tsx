import { CardInfosType } from '../../utils/types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './style-card-infos.css';

export function CardInfos({
  localidade,
  uf,
  cep,
  bairro,
  ddd,
  ibge,
  logradouro,
}: CardInfosType) {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Body>
        <Card.Title>{`${localidade} , ${uf}`}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{cep}</Card.Subtitle>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Rua: {logradouro}</ListGroup.Item>
          <ListGroup.Item>Bairro: {bairro}</ListGroup.Item>
          <ListGroup.Item>DDD: {ddd}</ListGroup.Item>
          <ListGroup.Item>IBGE: {ibge}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}
