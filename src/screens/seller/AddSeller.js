import React, { useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';
import { Button, Container, Header, TextInput, Modal } from '../../components';
import images from '../../themes/images';

function AddSeller() {
  const navigation = useNavigation();
  const modalizeRef = useRef();

  useEffect(() => {
    onOpen();
  }, []);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

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
      <Modalize ref={modalizeRef} adjustToContentHeight>
        <Modal
          ilustration={images.illustration.form}
          title="Sebelum Mulai!"
          desc="Isi dulu data penjual ya, habis itu lanjut isi data produknya :D"
        />
      </Modalize>
    </Container>
  );
}

export default AddSeller;
