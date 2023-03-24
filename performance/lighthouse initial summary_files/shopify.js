const client = ShopifyBuy.buildClient({
  domain: 'recreation-community.myshopify.com',
  storefrontAccessToken: 'bdfb42209264a720ddde5f9c3fe720b0',
})

// Fetch all products in your shop
client.product.fetchAll().then((products) => { console.log(products) })

const productId = 'gid://shopify/Product/7857989384';
console.log(productId)

// client.product.fetch(productId).then((product) => {
//   console.log(product);
// });

// Fetch a single product by Handle
const handle = 'product-handle';

client.product.fetchByHandle(handle).then((product) => {
  console.log(product);
});