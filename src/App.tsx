import { useEffect, useState } from 'react'
import * as C from './App.styles'
import { MainRoutes } from './routes/MainRoutes';

const App = () => {
  return (
    <div>
      <C.Header>
          <C.HeaderTitle>Galeria de fotos</C.HeaderTitle>
      </C.Header>

      <div>
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;