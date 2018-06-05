import lodash from "lodash";

const { assign, each } = lodash;

const data = {
    t1: {
        source: "10.1.2.3"
    },
    t2: {
        source: "10.1.2.3"
    }
}
const payload = {
    t1: {nRows: 200}
}

let newData = each(data, item => item['status']='pending')
// console.info(JSON.stringify(newData, null, 2))
//  newData = each(data, item => item['status']='start')
// console.info(JSON.stringify(newData, null, 2))


each(data, (item, key) => {
      if( key in payload) {
          newData[key]= assign({}, item , payload[key], {status: 'qwert'});
      }
  })
console.info(JSON.stringify(newData, null, 2))


