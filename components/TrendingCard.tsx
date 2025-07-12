import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import MaskedView from '@react-native-masked-view/masked-view';
import { images } from '@/constants/images';

const TrendingCard = ({movie:{movie_id, title, poster_url}, index}:TrendingCardProps) => {
  return (
    <Link href={`/movies/${movie_id}`} asChild>
        <TouchableOpacity className='w-32 relative pl-5'>
            <Image source={{uri: poster_url}}
            className='w-32 h-48 rounded-lg'
            resizeMode='cover' 
            />
          
            <View className='flex-row items-center justify-between mt-2 '>
              <Text className='text-sm font-bold flex-1 ml-1' numberOfLines={1}>{title}</Text>
              <View>
                <MaskedView maskElement={
                  <Text className='font-bold text-black text-4xl ml-7'>{index + 1}</Text>
                }>
                  <Image source={images.rankingGradient1} className="w-12 h-12" resizeMode="cover"/>
                </MaskedView>
              </View>
            </View>
         
        </TouchableOpacity>
    </Link>
  )
}

export default TrendingCard