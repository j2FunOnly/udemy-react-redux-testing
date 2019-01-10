import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapper;

beforeEach(() => {
  const initState = {
    comments: ['comment one', 'comment two']
  };

  wrapper = mount(
    <Root initState={initState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it('creates on LI per comment', () => {
  expect(wrapper.find('li').length).toEqual(2);
});

it('shows text for each comment', () => {
  expect(wrapper.render().text()).toContain('comment one');
  expect(wrapper.render().text()).toContain('comment two');
});
