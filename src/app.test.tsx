import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './app';

describe('Box', () => {
  it('renders the layout correctly', () => {
    render(<App>Sample content</App>);

    expect(screen.queryByTestId('app-header')).toBeInTheDocument();
    expect(screen.queryByTestId('app-header-link')).toBeInTheDocument();
    expect(screen.queryByTestId('app-content')).toBeInTheDocument();
    expect(screen.queryByTestId('app-footer')).toBeInTheDocument();
  });

  it('renders any content passed in', () => {
    render(<App>Sample content</App>);

    expect(screen.queryByTestId('app-content')).toHaveTextContent('Sample content');
  });
});
