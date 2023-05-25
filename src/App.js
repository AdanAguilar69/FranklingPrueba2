import React, { useState } from 'react';

const lalargaComponent = ({ words }) => {
  // 1. Utilizamos el hook useState para crear una variable de estado llamada 'lalarga' e inicializarla con una cadena vacía.
  const [lalarga, setlalarga] = useState('');

  // 2. Creamos una función llamada 'findlalarga' que buscará la palabra más larga en el arreglo 'words'.
  const findlalarga = () => {
    let maxLength = 0;
    let longest = '';

    // 3. Recorremos el arreglo 'words' utilizando el método forEach.
    words.forEach(word => {
      // 4. Comparamos la longitud de cada palabra con 'maxLength' para encontrar la más larga.
      if (word.length > maxLength) {
        maxLength = word.length;
        longest = word;
      }
    });

    // 5. Actualizamos el estado 'lalarga' utilizando el setter 'setlalarga' y le asignamos la palabra más larga encontrada.
    setlalarga(longest);
  };

  // 6. Utilizamos el hook useEffect para ejecutar la función 'findlalarga' una vez que el componente se haya renderizado.
  React.useEffect(() => {
    findlalarga();
  }, []);

  // 7. Renderizamos el componente y mostramos la palabra más larga.
  return (
    <div>
      <p>La palabra mas larga: {lalarga}</p>
    </div>
  );
};

export default lalargaComponent;
