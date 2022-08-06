import axios from 'axios';

const alamiApiClient = axios.create({
  baseURL: 'https://dev.dummy-api.alamisharia.co.id/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

function fetchProduct(sellerId) {
  return alamiApiClient
    .get(`listProductBySellerId?seller_id=${sellerId}`)
    .then((response) => response);
}

function fetchProductByKeyword(keyword) {
  return alamiApiClient
    .get(`searchProductByKeyword?keyword=${keyword}`)
    .then((response) => response);
}

function postSeller(payload) {
  return alamiApiClient.post(`addSeller`, payload).then((response) => response);
}

function postProduct(payload) {
  return alamiApiClient.post(`addProduct`, payload).then((response) => response);
}

export const alamiService = {
  fetchProduct,
  postSeller,
  postProduct,
  fetchProductByKeyword,
};
