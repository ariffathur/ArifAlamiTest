/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { FlatList } from 'react-native';
import { debounce } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Header, SearchInput, ProductCard } from '../../components';
import { fetchProductByKeyword, resetProduct } from './productSlice';

function SearchProduct() {
  const dispatch = useDispatch();
  const productListData = useSelector((state) => state.product?.products);

  // useEffect(() => {
  //   dispatch(fetchProductBySellerId(sellerData.data?.id));
  // }, []);

  const onChangeText = debounce((value) => {
    if (value.length >= 3) {
      dispatch(fetchProductByKeyword(value));
    } else {
      dispatch(resetProduct());
    }
  }, 1000);

  return (
    <Container blue withFlex>
      <Header>Cari Produk</Header>
      <SearchInput
        handleTextChange={(value) => onChangeText(value)}
        placeHolder="Masukan kata kunci nama produk"
      />
      <FlatList data={productListData} renderItem={({ item }) => <ProductCard item={item} />} />
    </Container>
  );
}

export default SearchProduct;
