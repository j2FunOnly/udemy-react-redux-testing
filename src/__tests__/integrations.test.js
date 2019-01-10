import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

let wrapper;

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      {name: 'Fetched comment #1'},
      {name: 'Fetched comment #2'}
    ]
  });

  wrapper = mount(
    <Root>
      <App />
    </Root>
  );
});

afterEach(() => {
  moxios.uninstall();
  wrapper.unmount();
});

it('can fetch a list of comments and display them', (done) => {
  wrapper.find('.fetch-comments').simulate('click');

  moxios.wait(() => {
    wrapper.update();

    expect(wrapper.find('li').length).toBeGreaterThan(0);

    done();
  });
});
