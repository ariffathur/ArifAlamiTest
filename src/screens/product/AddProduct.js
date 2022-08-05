import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useForm, Controller } from 'react-hook-form';
import { Button, Container, Header, TextInput, TextPresable, Padder } from '../../components';
import Colors from '../../themes/colors';

function AddProduct() {
  const navigation = useNavigation();

  /** Form Config */
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      sellerId: '1',
      nama: '',
      satuan: '',
      hargaSatuan: '',
      deskripsi: '',
    },
  });
  const onSubmit = (data) => console.log(data);
  return (
    <Container blue withFlex>
      <Header>Daftarin Produk Yuk</Header>

      <KeyboardAwareScrollView>
        <Container withRadius={12}>
          {/* Seller ID Field */}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                editable={false}
                title="ID Penjual"
                handleTextChange={onChange}
                handleOnBlur={onBlur}
                value={value}
              />
            )}
            name="sellerId"
          />
          {errors.sellerId && (
            <Text style={{ marginBottom: 6, color: Colors.warning }}>Wajib diisi gan!</Text>
          )}
          <Padder size={8} />

          {/* Nama Produk Field */}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                title="Nama Produk"
                handleTextChange={onChange}
                handleOnBlur={onBlur}
                value={value}
              />
            )}
            name="nama"
          />
          {errors.nama && (
            <Text style={{ marginBottom: 6, color: Colors.warning }}>Wajib diisi gan!</Text>
          )}
          <Padder size={8} />

          {/* Satuan Produk Field */}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                title="Satuan Produk"
                handleTextChange={onChange}
                handleOnBlur={onBlur}
                value={value}
                placeHolder="Masukan satuan berat produk"
              />
            )}
            name="satuan"
          />
          {errors.satuan && (
            <Text style={{ marginBottom: 6, color: Colors.warning }}>Wajib diisi gan!</Text>
          )}
          <Padder size={8} />

          {/* Harga Satuan Produk Field */}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                title="Harga Produk"
                handleTextChange={onChange}
                handleOnBlur={onBlur}
                value={value}
                placeHolder="Masukan harga satuan produk"
              />
            )}
            name="hargaSatuan"
          />
          {errors.hargaSatuan && (
            <Text style={{ marginBottom: 6, color: Colors.warning }}>Wajib diisi gan!</Text>
          )}
          <Padder size={8} />

          {/* Deskripsi Produk Field */}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                isTextArea
                title="Deskipsi Produk"
                handleTextChange={onChange}
                handleOnBlur={onBlur}
                value={value}
                placeHolder="Deskripsikan produk juragan disni"
              />
            )}
            name="deskripsi"
          />
          {errors.deskripsi && (
            <Text style={{ marginBottom: 6, color: Colors.warning }}>Wajib diisi gan!</Text>
          )}
          <Padder size={20} />

          <View />
          <Button isDisabled={false} handleOnpress={handleSubmit(onSubmit)}>
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
