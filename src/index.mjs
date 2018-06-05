
const {get} = require('lodash');
const gitResponse = {
    SPRACCNBR: '123456789',
    // "QSEC.CURR": 'USD',
    // "QSEC.AMOUNT": 4500,

    QSEC:{
        CURR: 'USD',
        AMOUNT: 9000
    }
};

// const ama = {
//     event: 'response',
//     data:{
//         account: '1234567890',
//         cur: 'EUR',
//         balance: 2345
//     }
// }

var account = {
'123456789':{
    currency: 'USD',
    balance: 100000000
}};


const config = {
    account: 'SPRACCNBR',
    cur: 'QSEC.CURR',
    balance: 'QSEC.AMOUNT',
    address:{
        street: 'QSEC.STREET'
    }
}
const data = {};



Object.keys(config).forEach(key =>{

    data[key] = get(gitResponse, config[key]);
})

const res ={event: 'response', data}



console.info(res);