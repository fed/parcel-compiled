/** @jsxImportSource @compiled/react */
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const App: React.FC<Props> = ({ children }) => (
  <div css={{ fontFamily: 'sans-serif' }}>
    <nav
      css={{
        backgroundColor: '#00253c',
        padding: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
      data-testid="app-header"
    >
      <a
        href="/"
        css={{ color: '#fff', textDecoration: 'none', ':focus': { outline: '2px solid' } }}
        data-testid="app-header-link"
      >
        Parcel and Compiled CSS-in-JS template
      </a>

      <button
        css={{
          backgroundColor: '#c83259',
          color: '#fff',
          border: 'none',
          padding: '4px 8px',
          borderRadius: '3px',
        }}
        type="button"
      >
        Search
      </button>
    </nav>

    <main css={{ padding: '8px' }} data-testid="app-content">
      {children}
    </main>

    <footer
      css={{ borderTop: '1px solid #d7d9de', backgroundColor: '#f3f4f5', padding: '8px' }}
      data-testid="app-footer"
    >
      For more information visit the official websites of both <a href="https://parceljs.org/">Parcel</a> and{' '}
      <a href="https://compiledcssinjs.com/">Compiled CSS-in-JS</a>.
    </footer>
  </div>
);
