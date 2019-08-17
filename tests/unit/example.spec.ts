import { shallowMount } from '@vue/test-utils';
import Home from '@/components/Home.vue';

describe('Home.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.text()).toMatch('We\'re in the process of making this site awesome.');
  });
});
