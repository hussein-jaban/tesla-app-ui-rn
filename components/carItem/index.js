import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledBtn from '../styledBtn';

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelS.jpeg')}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting from $69,000</Text>
      </View>

      <StyledBtn />
    </View>
  );
};

export default CarItem;
