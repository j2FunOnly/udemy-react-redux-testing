import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapper;

beforeEach(() => {
  wrapper = mount(<CommentBox />);
});

afterEach(() => {
  wrapper.unmount();
});

it('has a text area and a button', () => {
  expect(wrapper.find('textarea').length).toEqual(1);
  expect(wrapper.find('button[type="submit"]').length).toEqual(1);
});

describe('user can interact with form', () => {
  beforeEach(() => {
    const event = {
      target: {
        value: '42'
      }
    };

    wrapper.find('textarea').simulate('change', event);
    // Force component rerender.
    wrapper.update();
  });

  it('has a textarea that users can type in', () => {
    expect(wrapper.find('textarea').prop('value')).toEqual('42');
    expect(wrapper.state('comment')).toEqual('42');
  });

  it('when form is submitted textarea gets empty', () => {
    wrapper.find('form').simulate('submit');
    wrapper.update();

    expect(wrapper.find('textarea').prop('value')).toEqual('');
    expect(wrapper.state('comment')).toEqual('');
  });
});
