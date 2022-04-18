/**
 * vitest
 */
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

import Home from './Home';

describe('Home', () => {
  it('first render', () => {
    const history = createMemoryHistory();
    const component = render(
      <Router history={history}>
        <Home/>
      </Router>
    );
    expect(component).toMatchSnapshot();
  });
});


// /**
//  * jest
//  */
// import { render } from '@testing-library/react';
// import { createMemoryHistory } from 'history';
// import Home from './Home';
// import { Router } from 'react-router-dom';
//
// describe('Home', function () {
//   it('first render', () => {
//     const history = createMemoryHistory();
//     const component = render(
//       <Router history={history}>
//         <Home/>
//       </Router>
//     );
//     expect(component).toMatchSnapshot();
//   });
// });
