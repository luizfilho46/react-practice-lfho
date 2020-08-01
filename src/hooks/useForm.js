import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  function handle(e) {
    const { name, value } = e.target;
    // eslint-disable-next-line no-use-before-define
    setValue(name, value);
  }

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function clear() {
    setValues(valoresIniciais);
  }

  return {
    clear,
    handle,
    values,
  };
}

export default useForm;
