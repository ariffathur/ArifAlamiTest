import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Container, Header, SearchInput, ProductCard, TextPresable } from '../../components';

function ProductList() {
  const navigation = useNavigation();
  return (
    <Container blue withFlex>
      <Header>List Produk Kamu</Header>

      <KeyboardAwareScrollView>
        <Container withRadius={12}>
          <SearchInput handleTextChange={() => {}} placeHolder="Masukan kata kunci nama produk" />
        </Container>
        <ProductCard />
      </KeyboardAwareScrollView>
      <View style={{ alignItems: 'center' }}>
        <TextPresable handleOnPress={() => navigation.navigate('ProductListScreen')}>
          Tambah Product
        </TextPresable>
      </View>
    </Container>
  );
}

export default ProductList;
