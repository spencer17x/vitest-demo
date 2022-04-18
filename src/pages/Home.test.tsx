import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import Home from './Home';

describe('MeetingEntrance', () => {
  it('first render', () => {
    const component = render(<Home/>);
    expect(component).toMatchSnapshot();
  });
});
