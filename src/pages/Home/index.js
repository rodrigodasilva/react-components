import React from 'react';
import { FaGithub } from 'react-icons/fa';

import Button from '../../components/Button';

import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <h1>Variants</h1>
      <br />
      <h3>Filled button</h3>
      <br />
      <p style={{ display: 'flex' }}>
        <Button>Default</Button>
        <Button color="primary" isLoading>
          Primary
        </Button>
        <Button color="secondary" isLoading>
          Secondary
        </Button>
        <Button color="success">Success</Button>
        <Button color="danger">Danger</Button>
      </p>
      <h3>Icons</h3>
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
      </p>

      <Button variant="outlined" shape="round-square" fullWidth>
        Default
      </Button>
    </Container>
  );
}
