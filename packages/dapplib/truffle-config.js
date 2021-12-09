require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture strong regret outside puppy inside light army gesture'; 
let testAccounts = [
"0x204e000e1c8582ccf35ed627b7c7bbc8c37c84855651218e97a53bd7bb17f8de",
"0x4dd517bcd18c4006d4153d30875af1633210851f3e8408357a7e943ff6f66e74",
"0xe0f2a456f725e663258ffa25e25332a4d534693ca9c2496cc21a29690cff3466",
"0x3ef4bb5112cf5cf464aac1ba39c102e947b42ca87a54e1a60aa462881cf0aceb",
"0xa992e9b35e1640a4851cbec142e13f728de1bb0135dabf86764b31947255df6a",
"0x252a52f06578218995b965ed73c95dbe5e1406d3f3dce883b39ac72a64b8f852",
"0x6934c20e1c16004d8f938913b7a45396e9efdb82dcd58c9beeb14808da0181e5",
"0xcd4b8f36a40c938df989f9a198e0e9d3a66891ac39052ac29c4de0fe8a82f432",
"0xe73c226762da61c268a4ede1f3f270b09f0880e26b085b193a0e190da839568e",
"0xa08b2362a7a5f227f1ce52d253d16d4ac5a53cc20fb622b400fb149954614ccb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


