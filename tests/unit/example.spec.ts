import { shallowMount } from '@vue/test-utils';
import Home from '@/views/Home.vue';

describe('Home.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.text()).toMatch('Creative technology is kind of our jam.');
  });
});
