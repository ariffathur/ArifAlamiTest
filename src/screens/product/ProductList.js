import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Container, Header, SearchInput, ProductCard, Button } from '../../components';

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
      <Button handleOnpress={() => navigation.navigate('AddProductScreen')} bottom>
        Tambah
      </Button>
    </Container>
  );
}

export default ProductList;
