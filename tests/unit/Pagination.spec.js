import { mount } from '@vue/test-utils'
import Pagination from '@/components/pagination.vue'

describe('pagination.vue', () => {
  it('renders props.activeItem when passed', () => {
    const searchedProducts = [{"id":7550806982875,"title":"75 Dark Skis","body_html":"<p><em>This is a demonstration store. You can purchase products like this from <a href=\"//skiandscuba.com\" target=\"_blank\">The Ski Chalet &amp; Treasure Cove Scuba</a>.</em></p><ul>\n<li>Auto Turn Rocker</li>\n<li>Extended Sidecut</li>\n<li>Air Tip</li>\n<li>Poplar Wood Core</li>\n</ul>","vendor":"Rossignol","product_type":"Skis","created_at":"2022-02-23T16:18:09+03:00","handle":"rossignol-experience-75-dark-skis-xelium-100-bindings-2016","updated_at":"2022-02-23T16:28:16+03:00","published_at":"2022-02-23T16:18:08+03:00","template_suffix":null,"status":"active","published_scope":"web","tags":"Skis","admin_graphql_api_id":"gid://shopify/Product/7550806982875","variants":[{"id":42509630734555,"product_id":7550806982875,"title":"160cm","price":"449.00","sku":"","position":1,"inventory_policy":"deny","compare_at_price":null,"fulfillment_service":"manual","inventory_management":"shopify","option1":"160cm","option2":null,"option3":null,"created_at":"2022-02-23T16:18:09+03:00","updated_at":"2022-02-23T16:18:09+03:00","taxable":true,"barcode":"012356011432","grams":11340,"image_id":36706922070235,"weight":25.0004,"weight_unit":"lb","inventory_item_id":44603792425179,"inventory_quantity":2,"old_inventory_quantity":2,"requires_shipping":true,"admin_graphql_api_id":"gid://shopify/ProductVariant/42509630734555"},{"id":42509630767323,"product_id":7550806982875,"title":"168cm","price":"449.00","sku":"","position":2,"inventory_policy":"deny","compare_at_price":null,"fulfillment_service":"manual","inventory_management":"shopify","option1":"168cm","option2":null,"option3":null,"created_at":"2022-02-23T16:18:10+03:00","updated_at":"2022-02-23T16:18:10+03:00","taxable":true,"barcode":"3607681848937","grams":11340,"image_id":36706922070235,"weight":25.0004,"weight_unit":"lb","inventory_item_id":44603792457947,"inventory_quantity":2,"old_inventory_quantity":2,"requires_shipping":true,"admin_graphql_api_id":"gid://shopify/ProductVariant/42509630767323"}],"options":[{"id":9606277464283,"product_id":7550806982875,"name":"Size","position":1,"values":["160cm","168cm"]}],"images":[{"id":36706922070235,"product_id":7550806982875,"position":1,"created_at":"2022-02-23T16:18:09+03:00","updated_at":"2022-02-23T16:18:09+03:00","alt":null,"width":739,"height":999,"src":"https://cdn.shopify.com/s/files/1/0631/9122/0443/products/Untitled-1_copy_copy_copy_copy_copy_copy_copy_5430fa6a-8548-468f-9620-3b50a2d31515.jpg?v=1645622289","variant_ids":[42509630734555,42509630767323],"admin_graphql_api_id":"gid://shopify/ProductImage/36706922070235"}],"image":{"id":36706922070235,"product_id":7550806982875,"position":1,"created_at":"2022-02-23T16:18:09+03:00","updated_at":"2022-02-23T16:18:09+03:00","alt":null,"width":739,"height":999,"src":"https://cdn.shopify.com/s/files/1/0631/9122/0443/products/Untitled-1_copy_copy_copy_copy_copy_copy_copy_5430fa6a-8548-468f-9620-3b50a2d31515.jpg?v=1645622289","variant_ids":[42509630734555,42509630767323],"admin_graphql_api_id":"gid://shopify/ProductImage/36706922070235"}}]
    const activeItem = 1
    const wrapper = mount(Pagination, {
      propsData: {
        searchedProducts,
        activeItem
      }
    })

    expect(wrapper.find('.pagination__item').isVisible()).toBe(true)
    expect(wrapper.props().activeItem).toBe(1)
  })
})
