import { shallowMount } from '@vue/test-utils';
import AllProducts from '@/views/AllProducts.vue';
import TShirts from '@/views/TShirts.vue';
import Shoes from '@/views/Shoes.vue';

describe('Shoes.vue', () => {
  it('renders the basic text', () => {
    const wrapper = shallowMount(Shoes);
    expect(wrapper.text()).toMatch('This is a Shoes page');
  });
});

describe('AllProducts.vue', () => {
  it('renders the basic text', () => {
    const wrapper = shallowMount(AllProducts);
    expect(wrapper.text()).toMatch('This is an All Products page');
  });
});

describe('TShirts.vue', () => {
  it('renders the basic text', () => {
    const wrapper = shallowMount(TShirts);
    expect(wrapper.text()).toMatch('This is a T-shirts page');
  });
});
