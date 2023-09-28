import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, {useState} from "react";
import { COLORS, SIZES, icons, FONTS, images } from "../constants";

const Home = () => {
  //CREATING A BUNCH OF DUMMY DATA

  //Hard coded  data for features
    const featuresData = [
        {
            id: 1,
            icon: icons.reload,
            color: COLORS.purple,
            backgroundColor: COLORS.lightpurple,
            description: "Top Up"
        },
        {
            id: 2,
            icon: icons.send,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Transfer"
        },
        {
            id: 3,
            icon: icons.internet,
            color: COLORS.primary,
            backgroundColor: COLORS.lightpurple,
            description: "Internet"
        },
        {
            id: 4,
            icon: icons.wallet,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: "Wallet"
        },
        {
            id: 5,
            icon: icons.bill,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Bill"
        },
        {
            id: 6,
            icon: icons.game,
            color: COLORS.secondary,
            backgroundColor: COLORS.lightpurple,
            description: "Games"
        },
        {
            id: 7,
            icon: icons.phone,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: "Mobile Prepaid"
        },
        {
            id: 8,
            icon: icons.more,
            color: COLORS.purple,
            backgroundColor: COLORS.lightpurple,
            description: "More"
        },
    ]

    //Hard coded data for special Promo Data
    const specialPromoData = [
        {
            id: 1,
            img: images.promoBanner,
            title: "Bonus Cashback1",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 2,
            img: images.promoBanner,
            title: "Bonus Cashback2",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 3,
            img: images.promoBanner,
            title: "Bonus Cashback3",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 4,
            img: images.promoBanner,
            title: "Bonus Cashback4",
            description: "Don't miss it. Grab it now!"
        },
    ]

    const [features, setFeatures] = useState(featuresData)
    const [specialPromos, setSpecialPromos] = useState(specialPromoData)


    //Function To render the Header Component - Hi there
    function renderHeader() {
      return(
        <View style={{
          flexDirection: 'row', marginVertical: SIZES.padding * 4
        }}>
          <View style={{flex: 1}}>
            <Text style={{...FONTS.h1}}>Hi there!</Text>
            <Text style={{...FONTS.body2, color: COLORS.gray}}>Ubcodes</Text>
          </View>

          <View style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <TouchableOpacity
                style={{
                  height: 40,
                  width: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: COLORS.lightGray,
                }}
            >
              <Image
                source={icons.bell}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.secondary
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  top: -5,
                  right: -5,
                  height: 10,
                  width: 10,
                  backgroundColor: COLORS.red,
                  borderRadius: 5
                }}
              >
              </View>
            </TouchableOpacity>
          </View>

        </View>
      )
    }

    //Function To render the Banner Component
    function renderBanner() {
      return (
        <View style={{height: 120, borderRadius: 120, marginBottom: SIZES.padding * 2

        }}>
          <Image 
            source={images.banner}
            resizeMode="cover"
            style={{
              height: '120%',
              width: '100%',
              borderRadius: 0,
            }}
          />
        </View>
      )
    }
 

    //Function To render the Features Component
    function renderFeatures() {
      const Header = ()=> (
        <View style={{marginBottom: SIZES.padding  * 2}}>
          <Text style={{...FONTS.h3}}>Features</Text>

        </View>
      )

      const renderItem =({item}) => {
        return(
          <TouchableOpacity
            style={{marginBottom: SIZES.padding * 2, width: 60, alignItems: 'center'}}
            onPress={() => console.log(item.description)}
          >
            <View
              style={{
                height: 50,
                width: 50,
                borderRadius: 20,
                backgroundColor: item.backgroundColor,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Image
                source={item.icon}
                resizeMode="contain"
                style={{ 
                  height: 20,
                   width: 20, 
                   tintColor: item.color
                }}
              />
            </View>
            <Text style={{ textAlign: 'center', flexWrap: 'wrap', ...FONTS.body4 }} >{item.description}</Text>
          </TouchableOpacity>
        )
      }

      return(
        <FlatList 
          ListHeaderComponent={Header}
          data={features}
          numColumns={4}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
          style={{
            marginTop: SIZES.padding * 2
          }}
        />
      )
    }


    function renderPromos() {
      
      const HeaderComponent = () => (
        <View>
         {renderHeader()} 
          {renderBanner()}
          {renderFeatures()}
          {renderPromoHeader()}
        </View>
      )

      const renderPromoHeader= () => (
        <View
          style={{
            flexDirection: 'row',
            marginBottom: SIZES.padding
          }}
        >
          <View style={{
            flex: 1
          }}>
            <Text style={{...FONTS.h3}}>Special Promos</Text>
          </View>
          <TouchableOpacity
            onPress={() => console.log("View All")}
          >
            <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>View All</Text>
          </TouchableOpacity>
        </View>
      )

      //SPECIAL PROMO SECTION
      const renderItem = ({item}) => (
        <TouchableOpacity
            style={{
              marginVertical: SIZES.base,
              width: SIZES.width / 2.5
            }}
            onPress={() => console.log(item.title)}
        >
         <View style={{
          height: 80,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.primary
         }}>
            <Image  
              source = { images.promoBanner }
              resizeMode = 'cover'
              style={{
                width: "100%",
                height: "100%",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}
            />
         </View>

              <View 
                style={{
                  padding: SIZES.padding,
                  backgroundColor: COLORS.lightGray,
                  borderBottomLeftRadius:20,
                  borderBottomRightRadius:20,
                }}
              >
                <Text style={{...FONTS.h4}}>{item.title}</Text>
                <Text style={{...FONTS.body4}}>{item.description}</Text>
              </View>

        </TouchableOpacity>
      )

      return(
        <FlatList 
            ListHeaderComponent={HeaderComponent}
           style={{
            paddingHorizontal: SIZES.padding * 3,
           }}
           numColumns={2}
           columnWrapperStyle={{justifyContent: 'space-between',}}
           data={specialPromos}
           keyExtractor = {item => `${item.id}`}
           renderItem = {renderItem}
           showVerticalScrollIndicator = {false}
           ListFooterComponent={
            <View style={{ marginBottom: 80 }}>

            </View>
           }
        />
      )
    }



  return (
    <SafeAreaView style={{flex: 1,backgroundColor: COLORS.white}}>
      {renderPromos()}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
