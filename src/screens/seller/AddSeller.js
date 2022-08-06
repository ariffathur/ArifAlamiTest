import React, { useRef, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { useForm, Controller } from 'react-hook-form';
import Toast from 'react-native-toast-message';
import {
  Button,
  Container,
  Header,
  TextInput,
  Modal,
  Padder,
  TextPresable,
} from '../../components';
import images from '../../themes/images';
import Colors from '../../themes/colors';
import { addSeller } from './sellerSlice';

function AddSeller() {
  const navigation = useNavigation();
  const modalizeRef = useRef();
  const dispatch = useDispatch();
  const sellerData = useSelector((state) => state.seller.seller);

  /** Effects */
  useEffect(() => {
    openModalize();
  }, []);

  useEffect(() => {
    if (sellerData?.code === 200) {
      Toast.show({
        type: 'success',
        text1: 'Berhasil Menambah Penjual',
      });
      navigation.navigate('AddProductScreen');
    } else if (sellerData?.code >= 400 && sellerData?.code < 600) {
      Toast.show({
        type: 'error',
        text1: sellerData?.message,
      });
    }
  }, [sellerData, navigation]);

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
  const onSubmit = (data) => dispatch(addSeller(data));

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
      <View style={{ alignSelf: 'center', position: 'absolute', bottom: 24 }}>
        <TextPresable size={18} handleOnPress={() => navigation.navigate('SearchProductScreen')}>
          Cari produk tersedia
        </TextPresable>
      </View>
    </Container>
  );
}

export default AddSeller;
