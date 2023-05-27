import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { App } from './app';
import { router } from './routes';
import 'normalize.css';

try {
  const rootElement = document.getElementById('app');

  if (!rootElement) {
    throw new Error(
      'Root element #app not available. Make sure an empty div element with an ID of `app` exists in the src/index.html file.',
    );
  }

  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <App>
        <RouterProvider router={router} />
      </App>
    </React.StrictMode>,
  );
} catch (error) {
  console.error(error);
}
