import React, { useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { useForm, Controller } from 'react-hook-form';
import { Button, Container, Header, TextInput, Modal, Padder } from '../../components';
import images from '../../themes/images';
import Colors from '../../themes/colors';

function AddSeller() {
  const navigation = useNavigation();
  const modalizeRef = useRef();

  /** Effects */
  useEffect(() => {
    navigation.navigate('AddProductScreen');
    // openModalize();
  }, [navigation]);

  /** Form Config */
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nama: '',
      kota: '',
    },
  });
  const onSubmit = (data) => console.log(data);

  const openModalize = () => {
    modalizeRef.current?.open();
  };

  return (
    <Container blue withFlex>
      <Header>Menjadi Seller</Header>
      <Container withRadius={12}>
        {/* Shop Name Field */}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              title="Nama Toko"
              handleTextChange={onChange}
              handleOnBlur={onBlur}
              placeHolder="Masukan nama toko juragan disini"
              value={value}
            />
          )}
          name="nama"
        />
        {errors.nama && (
          <Text style={{ marginBottom: 6, color: Colors.warning }}>Wajib diisi gan!</Text>
        )}
        <Padder size={8} />
        {/* Shop City Field */}
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              title="Kota Toko"
              handleTextChange={onChange}
              handleOnBlur={onBlur}
              placeHolder="Masukan kota toko juragan disini"
              value={value}
            />
          )}
          name="kota"
        />
        {errors.kota && (
          <Text style={{ marginBottom: 6, color: Colors.warning }}>Wajib diisi gan!</Text>
        )}
        <Padder size={20} />
        <Button isDisabled={false} handleOnpress={handleSubmit(onSubmit)}>
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
