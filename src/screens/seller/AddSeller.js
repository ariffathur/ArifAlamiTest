import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Button, Container, Header, TextInput } from '../../components';

function AddSeller() {
  const navigation = useNavigation();
  return (
    <Container blue withFlex>
      <Header>Menjadi Seller</Header>
      <Container withRadius={12}>
        <TextInput
          title="Nama Toko"
          handleTextChange={() => {}}
          marginBottom
          placeHolder="Masukan nama toko juragan disini"
        />
        <TextInput
          title="Kota Toko"
          handleTextChange={() => {}}
          marginBottom
          placeHolder="Masukan kota toko juragan disini"
        />

        <Button isDisabled={false} handleOnpress={() => navigation.navigate('AddProductScreen')}>
          Simpan
        </Button>
      </Container>
    </Container>
  );
}

export default AddSeller;
