import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Categories from '../../components/Categories';
import Title from '../../components/Title';
import styles from './styles';

//added comment
const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text='Where do' style={{ fontWeight: 'normal' }}/>
        <Title text='you want to go?'/>

        <Title text='Expore Attractions' style={styles.subtitle }/>

        <Categories selectedCategory='All' categories={['All', 'Popular', 'Historical', 'Random', 'Trending', 'Exclusive', 'Others']}/>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
