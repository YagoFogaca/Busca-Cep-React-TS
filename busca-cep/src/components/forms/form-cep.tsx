import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Api } from '../../utils/api';
import { CardInfosType } from '../../utils/types';
import { useEffect, useState } from 'react';
import { CardInfos } from '../card-infos/card-infos';

import './style-form.css';

export function FormCep() {
  const [cep, setCep] = useState<CardInfosType | undefined>();

  async function getByCep(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cep = event.currentTarget.cep.value;

    const getCep = await Api.getCep(cep);
    setCep(getCep);
  }

  console.log(cep);

  return (
    <section>
      <Form className="form-busca" onSubmit={getByCep}>
        <Form.Control
          id="cep"
          type="number"
          placeholder="Digite seu CEP aqui..."
          aria-label="Recipient's username with two button addons"
        />
        <Button variant="success" size="lg" type="submit">
          Buscar
        </Button>
      </Form>
      {cep ? (
        <CardInfos
          bairro={cep.bairro}
          cep={cep.cep}
          localidade={cep.localidade}
          ddd={cep.ddd}
          ibge={cep.ibge}
          logradouro={cep.logradouro}
          uf={cep.uf}
        />
      ) : (
        <></>
      )}
    </section>
  );
}
