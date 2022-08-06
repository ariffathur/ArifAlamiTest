/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Header, ProductCard, TextPresable, EmptyState } from '../../components';
import { fetchProductBySellerId } from './productSlice';

function ProductList() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const sellerData = useSelector((state) => state.seller?.seller);
  const productListData = useSelector((state) => state.product?.products);

  useEffect(() => {
    dispatch(fetchProductBySellerId(sellerData.data?.id));
  }, []);

  return (
    <Container blue withFlex>
      <Header>List Produk</Header>
      <FlatList
        data={productListData}
        ListEmptyComponent={<EmptyState title="Belum ada data, tambah dulu yuk" />}
        renderItem={({ item }) => <ProductCard item={item} />}
      />
      <View style={{ alignItems: 'center' }}>
        <TextPresable handleOnPress={() => navigation.navigate('AddProductScreen')}>
          Tambah Product
        </TextPresable>
      </View>
    </Container>
  );
}

export default ProductList;
