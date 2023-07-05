// src/mocks/handlers.js
import { rest } from 'msw';
import formConfig from '../forms/form01.json';

export const handlers = [
  rest.get('http://localhost:3001/form*.json', (req, res, ctx) => {
    return res(
      // ctx.status(403),
      ctx.json(formConfig)
    );
  })
  /* rest.post('https://kwesforms.com/api/foreign/forms/yourFormKeyGoesHere/favicon', (req, res, ctx) => {
    return res(
      ctx.status(200),
      // ctx.json(formConfig)
    );
  }) */
];
