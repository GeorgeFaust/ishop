import React, { Component } from 'react';
import './App.css';
import Table from './Table'



const Goods = [
  {
    "name": "iPhone",
    "price": "25$",
    "quantity": "5",
    "image": "https://www.e-katalog.ru/jpg_zoom1/916176.jpg"
  },
  {
    "name": "iPad",
    "price": "55$",
    "quantity": "3",
    "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/image/AppleInc/aos/published/images/i/pa/ipad/wifi/ipad-wifi-select-silver-201803_GEO_US?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1538433934562"
  },
  {
    "name": "MacBook",
    "price": "80$",
    "quantity": "7",
    "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/gold/macbook-gold-select-201810?wid=892&hei=820&&qlt=80&.v=1539399746259"
  },
  {
    "name": "iPod",
    "price": "35$",
    "quantity": "2",
    "image": "https://avatars.mds.yandex.net/get-mpic/199079/img_id6610115222553097733/9hq"
  },
  {
    "name": "AirPods",
    "price": "45$",
    "quantity": "3",
    "image": "https://www.re-store.ru/upload/iblock/883/default-883510654183dd10c2cddf30650fd663.jpg"
  },
  {
    "name": "EarPods",
    "price": "15$",
    "quantity": "8",
    "image": "https://nopac.nc/69601-tm_large_default/ecouteurs-apple-earpods-telecommande-mic.jpg"
  }
]


class App extends Component {
  render() {
    return <Table list={Goods} />
  }
}


export default App;





