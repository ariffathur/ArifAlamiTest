import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useForm, Controller } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import { Button, Container, Header, TextInput, TextPresable, Padder } from '../../components';
import Colors from '../../themes/colors';
import { addProduct } from './productSlice';

function AddProduct() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const sellerData = useSelector((state) => state.seller?.seller);
  const productData = useSelector((state) => state.product?.product);

  const [sellerId, setSellerId] = useState('');

  useEffect(() => {
    setSellerId(sellerData.data?.id);
  }, [sellerData]);

  /** Effects */
  useEffect(() => {
    if (productData?.code === 200) {
      Toast.show({
        type: 'success',
        text1: 'Berhasil Menambah Product',
      });
    } else if (productData?.code >= 400 && productData?.code < 600) {
      Toast.show({
        type: 'error',
        text1: productData?.message,
      });
    }
  }, [productData]);

  /** Form Config */
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nama: '',
      satuan: '',
      hargaSatuan: '',
      deskripsi: '',
    },
  });
  const onSubmit = (data) => {
    const payload = data;
    payload.sellerId = sellerId;
    dispatch(addProduct(payload));
  };
  return (
    <Container blue withFlex>
      <Header>Daftarin Produk Yuk</Header>

      <KeyboardAwareScrollView>
        <Container withRadius={12}>
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
                placeHolder="Masukan nama produk"
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
                isNumber
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
