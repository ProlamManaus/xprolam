
import { useState } from 'react';
import './customers.css';
import Title from '../../components/Title';
import Header from '../../components/Header';
import firebase from '../../services/firebaseConnection';
import { FiUser } from 'react-icons/fi';

import { toast } from 'react-toastify';

export default function Customers() {
  const [numeroBobina, setnumeroBobina] = useState('');
  const [ordemProducao, setordemProducao] = useState('');
  const [operador, setoperador] = useState('');

  async function handleAdd(e) {
    e.preventDefault();
    // alert('TESTE')

    // [nomeFantasia,  = numeroBobina
    // cnpj = ordemProducao
    // endereco = operador

    if (numeroBobina !== '' && ordemProducao !== '' && operador !== '') {
      await firebase.firestore().collection('customers')
        .add({
          numeroBobina: numeroBobina,
          ordemProducao: ordemProducao,
          operador: operador
        })
        .then(() => {
          setnumeroBobina('');
          setordemProducao('');
          setoperador('');
          toast.info('Empresa cadastrada com sucesso!');
        })
        .catch((error) => {
          console.log(error);
          toast.error('Erro ao cadastrar essa empresa.');
        })
    } else {
      toast.error('Preencha todos os campos!')
    }

  }

    //Chamado quando troca o assunto
    function handleChangeSelect(e) {
      setoperador(e.target.value);
    }

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Clientes">
          <FiUser size={25} />
        </Title>

        <div className="container">
          <form className="form-profile customers" onSubmit={handleAdd}>
            <label>Numero da Bobina</label>
            <input type="text" placeholder="" value={numeroBobina} onChange={(e) => setnumeroBobina(e.target.value)} />

            <label>Ordem de Produção</label>
            <input type="text" placeholder="" value={ordemProducao} onChange={(e) => setordemProducao(e.target.value)} />

            <label>Inspetor(a)</label>
            {/* <input type="text" placeholder="" value={operador} onChange={(e) => setoperador(e.target.value)} /> */}
            <select
              value={operador}
              onChange={handleChangeSelect}
            >
              <option value="z"></option>
              <option value="a">Antônia Pena</option>
              <option value="d">Carlison Silva</option>
              <option value="b">Darla Amaro</option>
              <option value="e">Tiago Castro</option>
              <option value="f">Juliane Duarte</option>
              <option value="g">Ketlen Souza</option>
              <option value="h">Marcell Santos</option>
            </select>


            <button type="submit">Cadastrar</button>

          </form>
        </div>

      </div>

    </div>
  )
}