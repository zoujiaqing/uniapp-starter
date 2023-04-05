// import React from 'react';
// import { render, waitFor, act, screen, fireEvent } from '@testing-library/react';
// import Category from '@views/xxx/category';
// import '@testing-library/jest-dom/extend-expect';
// import * as MockData from './mockData';

// jest.mock('@services/xxx/xxx', () => ({
//   queryPage: () => Promise.resolve(MockData.queryPages),
//   delete: () => Promise.resolve(MockData.queryPages),
//   add: () => Promise.resolve(MockData.queryPages),
// }))

// describe('Category View', () => {
//   test('render', async () => {
//     render(
//         <Category />
//     );
//     await waitFor(() =>
//       expect(screen.getByText('xxx')).toBeInTheDocument(),
//     );
//   });
// });

// async.test.ts
// const getData = (type: string) => type === 'get'?Promise.resolve(1):Promise.reject(2)

// test('测试异步', async () => {
//   expect.assertions(1);
//   await expect(getData('get')).resolves.toEqual(1)
// })

import { mount } from '@vue/test-utils'
test('test2', async () => {
  console.log(111)
})

// import { fetchUserInfo } from '../request'

// test('测试 fetchUserInfo 的返回值为 { success: true }', () => {
//   return fetchUserInfo().then((res: { data: any }) => {
//     expect(res.data.id).toEqual(1)
//   })
// })
