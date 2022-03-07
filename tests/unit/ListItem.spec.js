import { shallowMount, mount } from '@vue/test-utils'
import ListItem from '@/components/ListItem.vue'

const onClick = jest.fn();

describe('list.vue', () => {
  const wrapper = shallowMount(ListItem, {
    props: {
      data: {
        title: 'title',
        variants: [
          { price: 123.321 }
        ]
      }
    },
    listeners: { click: onClick }
  });
  
  test('is vue component', () => {
    expect(wrapper.vm).toBeTruthy();
  })

  it('click emmit', async () => {
    wrapper.vm.$emit('click');

    expect(wrapper.emitted().click).toBeTruthy()
  })
})