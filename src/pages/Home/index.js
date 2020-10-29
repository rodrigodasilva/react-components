import React, { useState } from 'react';
// import { FaGithub } from 'react-icons/fa';

// import { toast } from '~/components/CustomToast';
// import Button from '~/components/Button';
import ReactSelect from '~/components/ReactSelect';

import { Container } from './styles';

export default function Home() {
  const [options, setOptions] = useState([
    { label: 'option 1', value: '1' },
    { label: 'option 2', value: '2' },
    { label: 'option 3', value: '3' },
  ]);
  const [singleValue, setSingleValue] = useState({});
  const [multiValues, setMultiValues] = useState([]);

  const handleCreateOption = (_value) => {
    setOptions([...options, { label: _value, value: _value }]);
    setMultiValues([...multiValues, { label: _value, value: _value }]);
  };

  const handleSelectSingleValue = (_value) => {
    setSingleValue(_value);
  };

  const handleSelectMultiValue = (_values) => {
    setMultiValues(_values);
  };

  // const handleOpenToast = () => {
  //   toast.default('Mensagem default', 'Descrição da mensagem default!');
  //   toast.success('Mensagem de sucesso', 'Descrição da mensagem de sucesso!');
  //   toast.error('Mensagem de erro', 'Descrição da mensagem de erro!');
  //   toast.warn('Mensagem de alerta', 'Descrição da mensagem de alerta!');
  //   toast.success(
  //     'Mensagem de sucesso',
  //     '',
  //     'configurar',
  //     'https://google.com'
  //   );
  // };

  return (
    <Container>
      {/* <h1>Variants</h1>
      <br />
      <h3>Filled button</h3>
      <br /> */}
      <div style={{ display: 'flex', margin: 20 }}>
        <ReactSelect
          value={singleValue}
          onChange={handleSelectSingleValue}
          options={options}
          label="Default"
        />
      </div>

      <div style={{ display: 'flex', margin: 20 }}>
        <ReactSelect
          value={singleValue}
          onChange={handleSelectSingleValue}
          options={options}
          label="Single Creatable"
          isCreatable
          onCreateOption={(value) => handleCreateOption(value)}
        />
      </div>

      <div style={{ display: 'flex', margin: 20 }}>
        <ReactSelect
          value={singleValue}
          onChange={handleSelectSingleValue}
          options={options}
          label="Single Limpavel"
          isCreatable
          isClearable
          onCreateOption={(value) => handleCreateOption(value)}
        />
      </div>

      <div style={{ display: 'flex', margin: 20 }}>
        <ReactSelect
          value={multiValues}
          options={options}
          onChange={handleSelectMultiValue}
          label="Multi select"
          isMulti
          isClearable
        />
      </div>

      <div style={{ display: 'flex', margin: 20 }}>
        <ReactSelect
          value={multiValues}
          options={options}
          label="Create Option"
          isMulti
          onChange={handleSelectMultiValue}
          isCreatable
          onCreateOption={(value) => handleCreateOption(value)}
        />
      </div>

      <div style={{ display: 'flex', margin: 20 }}>
        <ReactSelect
          value={multiValues}
          onChange={handleSelectMultiValue}
          options={options}
          label="Create Option com input"
          isMulti
          isCreatable
          menuIsOpen={false}
          onCreateOption={(value) => handleCreateOption(value)}
        />
      </div>
      {/* <h3>Icons</h3>
      <br />
      <p style={{ display: 'flex' }}>
        <Button startIcon={<FaGithub />} endIcon={<FaGithub />}>
          Default
        </Button>
        <Button color="primary" isLoading>
          Primary
        </Button>
        <Button color="secondary" isLoading>
          Secondary
        </Button>
        <Button color="success">Success</Button>
        <Button color="danger">Danger</Button>
      </p>
      <br />
      <h3>Outlined button</h3>
      <br />
      <p style={{ display: 'flex' }}>
        <Button variant="outlined">Default</Button>
        <Button color="primary" variant="outlined">
          Primary
        </Button>
        <Button color="secondary" variant="outlined">
          Secondary
        </Button>
        <Button color="success" variant="outlined">
          Success
        </Button>
        <Button color="danger" variant="outlined">
          Danger
        </Button>
      </p>
      <br />
      <br />
      <h3>Text button</h3>
      <br />
      <p style={{ display: 'flex' }}>
        <Button variant="text">Default</Button>
        <Button color="primary" variant="text">
          Primary
        </Button>
        <Button color="secondary" variant="text">
          Secondary
        </Button>
        <Button color="success" variant="text">
          Success
        </Button>
        <Button color="danger" variant="text">
          Danger
        </Button>
      </p>

      <br />
      <br />
      <h1>Shapes</h1>

      <p style={{ display: 'flex' }}>
        <Button variant="outlined" shape="round-square">
          Default
        </Button>
        <Button color="primary" variant="outlined" shape="round-square">
          Primary
        </Button>
        <Button color="secondary" variant="outlined" shape="round-square">
          Secondary
        </Button>
        <Button color="success" variant="outlined" shape="round-square">
          Success
        </Button>
        <Button color="danger" variant="outlined" shape="round-square">
          Danger
        </Button>
      </p>
      <br />

      <p style={{ display: 'flex' }}>
        <Button variant="text" shape="round-square">
          Default
        </Button>
        <Button color="primary" variant="text" shape="round-square">
          Primary
        </Button>
        <Button color="secondary" variant="text" shape="round-square">
          Secondary
        </Button>
        <Button color="success" variant="text" shape="round-square">
          Success
        </Button>
        <Button color="danger" variant="text" shape="round-square">
          Danger
        </Button>
      </p>
      <br />
      <p style={{ display: 'flex' }}>
        <Button shape="circle">@</Button>
        <Button color="primary" shape="circle">
          @
        </Button>
        <Button color="secondary" shape="circle">
          @
        </Button>
        <Button color="success" shape="circle">
          @
        </Button>
        <Button color="danger" shape="circle">
          @
        </Button>
      </p>
      <br />

      <h1>Sizes</h1>

      <h3>Large</h3>

      <p style={{ display: 'flex' }}>
        <Button size="large" variant="outlined" shape="round-square">
          Default
        </Button>
        <Button
          size="large"
          color="primary"
          variant="outlined"
          shape="round-square"
        >
          Primary
        </Button>
        <Button
          size="large"
          color="secondary"
          variant="outlined"
          shape="round-square"
        >
          Secondary
        </Button>
        <Button
          size="large"
          color="success"
          variant="outlined"
          shape="round-square"
        >
          Success
        </Button>
        <Button
          size="large"
          color="danger"
          variant="outlined"
          shape="round-square"
        >
          Danger
        </Button>
      </p>
      <br />

      <p style={{ display: 'flex' }}>
        <Button size="large" variant="text" shape="round-square">
          Default
        </Button>
        <Button
          size="large"
          color="primary"
          variant="text"
          shape="round-square"
        >
          Primary
        </Button>
        <Button
          size="large"
          color="secondary"
          variant="text"
          shape="round-square"
        >
          Secondary
        </Button>
        <Button
          size="large"
          color="success"
          variant="text"
          shape="round-square"
        >
          Success
        </Button>
        <Button size="large" color="danger" variant="text" shape="round-square">
          Danger
        </Button>
      </p>
      <br />
      <p style={{ display: 'flex' }}>
        <Button size="large" shape="circle">
          @
        </Button>
        <Button size="large" color="primary" shape="circle">
          @
        </Button>
        <Button size="large" color="secondary" shape="circle">
          @
        </Button>
        <Button size="large" color="success" shape="circle">
          @
        </Button>
        <Button size="large" color="danger" shape="circle">
          @
        </Button>
      </p>
      <br />
      <br />
      <br />
      <h3>Small</h3>

      <p style={{ display: 'flex' }}>
        <Button size="small" variant="outlined" shape="round-square">
          Default
        </Button>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          shape="round-square"
        >
          Primary
        </Button>
        <Button
          size="small"
          color="secondary"
          variant="outlined"
          shape="round-square"
        >
          Secondary
        </Button>
        <Button
          size="small"
          color="success"
          variant="outlined"
          shape="round-square"
        >
          Success
        </Button>
        <Button
          size="small"
          color="danger"
          variant="outlined"
          shape="round-square"
        >
          Danger
        </Button>
      </p>
      <br />

      <p style={{ display: 'flex' }}>
        <Button size="small" variant="text" shape="round-square">
          Default
        </Button>
        <Button
          size="small"
          color="primary"
          variant="text"
          shape="round-square"
        >
          Primary
        </Button>
        <Button
          size="small"
          color="secondary"
          variant="text"
          shape="round-square"
        >
          Secondary
        </Button>
        <Button
          size="small"
          color="success"
          variant="text"
          shape="round-square"
        >
          Success
        </Button>
        <Button size="small" color="danger" variant="text" shape="round-square">
          Danger
        </Button>
      </p>
      <br />
      <p style={{ display: 'flex' }}>
        <Button size="small" shape="circle">
          @
        </Button>
        <Button size="small" color="primary" shape="circle">
          @
        </Button>
        <Button size="small" color="secondary" shape="circle">
          @
        </Button>
        <Button size="small" color="success" shape="circle">
          @
        </Button>
        <Button size="small" color="danger" shape="circle">
          @
        </Button>
      </p>
      <br />
      <br />
      <br />

      <h3>Loading</h3>
      <p style={{ display: 'flex' }}>
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="danger">Danger</Button>
      </p>
      <br />
      <h3>Outlined button</h3>
      <br />
      <p style={{ display: 'flex' }}>
        <Button variant="outlined">Default</Button>
        <Button color="primary" variant="outlined">
          Primary
        </Button>
        <Button color="secondary" variant="outlined">
          Secondary
        </Button>
        <Button color="success" variant="outlined">
          Success
        </Button>
        <Button color="danger" variant="outlined">
          Danger
        </Button>
      </p>
      <br />
      <br />
      <h3>Text button</h3>
      <br />
      <p style={{ display: 'flex' }}>
        <Button variant="text">Default</Button>
        <Button color="primary" variant="text">
          Primary
        </Button>
        <Button color="secondary" variant="text">
          Secondary
        </Button>
        <Button color="success" variant="text">
          Success
        </Button>
        <Button color="danger" variant="text">
          Danger
        </Button>
      </p> */}

      {/* <Button variant="outlined" shape="round-square" fullWidth>
        Default
      </Button> */}
    </Container>
  );
}
