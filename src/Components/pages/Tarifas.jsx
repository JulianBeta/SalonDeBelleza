import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"


class Tarifas extends React.Component {
  render() {
    return (
      <body>
        <div>
          <p>Bienvenido a nuestra sección de Tarifas. A continúación encontrará la lista de precios para cada uno de nuestros servicios
            jurídicos.  Ya sea que necesite asesoramiento legal, representación en un caso o ayuda con la preparación de documentos legales,
            estamos aquí para brindarle soluciones asequibles y confiables.</p>

          <table className="table table-striped">
            <thead>
              <tr>
                <th>Servicios</th>
                <th>Asesoría</th>
                <th>Asesoría y elaboración de documentos</th>
                <th>Asesoría, elaboración de documentos y trámite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fila 1, Columna 1</td>
                <td>Fila 1, Columna 2</td>
                <td>Fila 1, Columna 3</td>
                <td>Fila 1, Columna 4</td>
              </tr>
              <tr>
                <td>Fila 2, Columna 1</td>
                <td>Fila 2, Columna 2</td>
                <td>Fila 2, Columna 3</td>
                <td>Fila 2, Columna 4</td>
              </tr>
              <tr>
                <td>Fila 3, Columna 1</td>
                <td>Fila 3, Columna 2</td>
                <td>Fila 3, Columna 3</td>
                <td>Fila 3, Columna 4</td>
              </tr>
              <tr>
                <td>Fila 4, Columna 1</td>
                <td>Fila 4, Columna 2</td>
                <td>Fila 4, Columna 3</td>
                <td>Fila 4, Columna 4</td>
              </tr>
              <tr>
                <td>Fila 5, Columna 1</td>
                <td>Fila 5, Columna 2</td>
                <td>Fila 5, Columna 3</td>
                <td>Fila 5, Columna 4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
    );
  }
}

export default Tarifas;