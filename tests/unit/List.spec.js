import { shallowMount, mount } from '@vue/test-utils'
import List from '@/pages/List.vue'

describe('list.vue', () => {
  const wrapper = shallowMount(List);
  
  test('is vue component', () => {
    expect(wrapper.vm).toBeTruthy();
  })

  it('is header visible', async () => {
    expect(wrapper.find('.header__title').text()).toBe('Product(s) 50')
  })
})