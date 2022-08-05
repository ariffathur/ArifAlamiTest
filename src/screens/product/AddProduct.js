import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Container, Header, TextInput, TextPresable } from '../../components';

function AddProduct() {
  const navigation = useNavigation();
  return (
    <Container blue withFlex>
      <Header>Daftarin Produk Yuk</Header>

      <KeyboardAwareScrollView>
        <Container withRadius={12}>
          <TextInput
            editable={false}
            title="ID Penjual"
            handleTextChange={() => {}}
            marginBottom
            value="1"
          />
          <TextInput
            title="Nama Produk"
            handleTextChange={() => {}}
            marginBottom
            placeHolder="Masukan nama produk"
          />
          <TextInput
            title="Satuan Produk"
            handleTextChange={() => {}}
            marginBottom
            placeHolder="Masukan satuan berat produk"
          />
          <TextInput
            title="Harga Produk"
            handleTextChange={() => {}}
            marginBottom
            placeHolder="Masukan harga satuan produk"
          />
          <TextInput
            isTextArea
            title="Deskripsi"
            handleTextChange={() => {}}
            marginBottom
            placeHolder="Deskripsikan produk juragan disni"
          />
          <View />
          <Button isDisabled={false} handleOnpress={() => navigation.navigate('ProductListScreen')}>
            Simpan
          </Button>
        </Container>
      </KeyboardAwareScrollView>
      <View style={{ alignItems: 'center' }}>
        <TextPresable handleOnPress={() => navigation.navigate('ProductListScreen')}>
          Lihat List Product
        </TextPresable>
      </View>
    </Container>
  );
}

export default AddProduct;
