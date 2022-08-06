import React from 'react';
import { View, Text } from 'react-native';
import Colors from '../themes/colors';
import fontFamily from '../themes/typography';

function ProductCard({ item }) {
  return (
    <View
      style={{
        borderRadius: 12,
        overflow: 'hidden',
        marginTop: 12,
        padding: 12,
        backgroundColor: Colors.white,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        <Text style={{ fontFamily: fontFamily.nunitoRegular, fontSize: 16, color: Colors.black }}>
          {`${item?.nama} (${item?.satuan})`}
        </Text>
        <Text style={{ fontFamily: fontFamily.nunitoBold, fontSize: 16, color: Colors.black }}>
          {item?.hargaSatuan}
        </Text>
      </View>
      <Text style={{ fontFamily: fontFamily.nunitoRegular, color: Colors.black }}>
        {item?.deskripsi}
      </Text>
    </View>
  );
}

export default ProductCard;
