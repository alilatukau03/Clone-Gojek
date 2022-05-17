import React, {Component} from 'react';
import {View, Text, Image, TextInput} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white', paddingTop: 15}}>
          {/* search bar */}
          <View style={{marginHorizontal: 17, flexDirection: 'row'}}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput
                placeholder="what do you want to eat?"
                style={{
                  borderWidth: 1,
                  borderColor: '#e8e8e8',
                  borderRadius: 25,
                  height: 40,
                  fontSize: 13,
                  paddingLeft: 45,
                  paddingRight: 20,
                  backgroundColor: 'white',
                  marginRight: 18,
                }}
              />
              <Image
                source={require('./Icon/search.png')}
                style={{position: 'absolute', top: 6, left: 12}}
              />
            </View>
            <View
              style={{
                width: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={require('./Icon/promo.png')} />
            </View>
          </View>
          {/* gopay */}
          <View style={{marginHorizontal: 17, marginTop: 8}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                backgroundColor: '#2c5fb8',
                borderTopLeftRadius: 4,
                borderTopRightRadius: 4,
                padding: 14,
              }}>
              <Image source={require('./Icon/gopay.png')} />
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>
                Rp 1.000.000.000.000.000,00
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 20,
                paddingBottom: 14,
                backgroundColor: '#2f65bd',
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
              }}>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={require('./Icon/pay.png')} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  Pay
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={require('./Icon/nearby.png')} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  Nearby
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={require('./Icon/topup.png')} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  Top Up
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Image source={require('./Icon/more.png')} />
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: 'white',
                    marginTop: 15,
                  }}>
                  More
                </Text>
              </View>
            </View>
          </View>
          {/* feature */}
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 18,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: 18,
              }}>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('./Icon/go-ride.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-RIDE
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('./Icon/go-car.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-CAR
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('./Icon/go-bluebird.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-BLUEBIRD
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('./Icon/go-send.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-SEND
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                marginBottom: 18,
              }}>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('./Icon/go-deals.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-DEALS
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('./Icon/go-pulsa.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-PULSA
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('./Icon/go-food.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  GO-FOOD
                </Text>
              </View>
              <View style={{width: '25%', alignItems: 'center'}}>
                <View
                  style={{
                    width: 58,
                    height: 58,
                    borderWidth: 1,
                    borderColor: '#efefef',
                    borderRadius: 18,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image source={require('./Icon/go-more.png')} />
                </View>
                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 6,
                  }}>
                  More
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: 54,
            flexDirection: 'row',
            backgroundColor: 'white',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./Icon/home-active.png')}
            />
            <Text style={{fontSize: 10, color: '#43ab4a', marginTop: 4}}>
              Home
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./Icon/order.png')}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Order
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./Icon/help.png')}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Help
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./Icon/inbox.png')}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Inbox
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 26, height: 26}}
              source={require('./Icon/account.png')}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Account
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

// const styles = StyleSheet.create({});
