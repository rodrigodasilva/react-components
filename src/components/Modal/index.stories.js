import React, { useState } from 'react';
import Modal from '.';
import Button from '../Button';
import Input from '../Input';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const Default = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div style={{ minWidth: '400px', minHeight: '400px' }}>
      <Button
        onClick={() => setModalIsOpen(true)}
        color="secondary"
        size="large"
      >
        Open
      </Button>

      {modalIsOpen && (
        <Modal
          title="Novo Setor"
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
        >
          <section>
            <Input label="Nome" placeholder="João" />

            <div className="d-flex justify-end mt-24">
              <Button color="secondary" bold>
                salvar
              </Button>
            </div>
          </section>
        </Modal>
      )}
    </div>
  );
};

export const CustomTitle = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div style={{ minWidth: '400px', minHeight: '400px' }}>
      <Button
        onClick={() => setModalIsOpen(true)}
        color="secondary"
        size="large"
      >
        Open
      </Button>

      {modalIsOpen && (
        <Modal
          title={<h1 style={{ color: 'red', fontSize: 32 }}>Custom Title</h1>}
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
        >
          <section>
            <Input label="Nome" placeholder="João" />

            <div className="d-flex justify-end mt-24">
              <Button color="secondary" bold>
                salvar
              </Button>
            </div>
          </section>
        </Modal>
      )}
    </div>
  );
};

export const CustomStyles = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div style={{ minWidth: '400px', minHeight: '400px' }}>
      <Button
        onClick={() => setModalIsOpen(true)}
        color="secondary"
        size="large"
      >
        Open
      </Button>

      {modalIsOpen && (
        <Modal
          title="Novo Setor"
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          maxHeight="200px"
          maxWidth="600px"
        >
          <section>
            <Input label="Nome" placeholder="João" />
            <Input label="Nome" placeholder="João" />
            <Input label="Nome" placeholder="João" />
            <Input label="Nome" placeholder="João" />
            <Input label="Nome" placeholder="João" />

            <div className="d-flex justify-end mt-24">
              <Button color="secondary" bold>
                salvar
              </Button>
            </div>
          </section>
        </Modal>
      )}
    </div>
  );
};
