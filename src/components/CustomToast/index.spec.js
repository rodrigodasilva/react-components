import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom';

import { ContainerToast, toast } from '.';

jest.useFakeTimers();

describe('<CustomToast />', () => {
  it('Should render a Toastify container ', () => {
    const { container } = render(<ContainerToast />);

    const toastifyContainer = container.querySelector(`.Toastify`);
    expect(toastifyContainer).toBeInTheDocument();
  });

  it('Should render a default toast', () => {
    const { container } = render(<ContainerToast />);

    act(() => {
      toast.default('Default', 'Mensagem default');
      jest.runAllTimers();
    });

    const defaultToast = container.querySelector(`.Toastify__toast--default`);
    expect(defaultToast).toBeInTheDocument();
  });

  it('Should render a success toast', () => {
    const { container } = render(<ContainerToast />);

    act(() => {
      toast.success('Success', 'Mensagem Success');
      jest.runAllTimers();
    });

    const successToast = container.querySelector(`.Toastify__toast--success`);
    expect(successToast).toBeInTheDocument();
  });

  it('Should render a error toast', () => {
    const { container } = render(<ContainerToast />);

    act(() => {
      toast.error('Erro', 'Mensagem Erro');
      jest.runAllTimers();
    });

    const errorToast = container.querySelector(`.Toastify__toast--error`);
    expect(errorToast).toBeInTheDocument();
  });

  it('Should render a warn toast', () => {
    const { container } = render(<ContainerToast />);

    act(() => {
      toast.warn('Warn', 'Mensagem warn');
      jest.runAllTimers();
    });

    const warnToast = container.querySelector(`.Toastify__toast--warning`);
    expect(warnToast).toBeInTheDocument();
  });
});
