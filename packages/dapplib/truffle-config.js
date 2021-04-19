require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture infant forget seed edge rare remain unknown heavy process obscure giant'; 
let testAccounts = [
"0xa5024e7ace5b3477b21eafeed2d4f561a7800fad947163425f28478c05806d59",
"0x18117e2476ae842ade4b380ca19c482312763b084a2d390da16fa3c2309fc273",
"0xff51ddc0b2a9b0f8ff3b346035c17ccb1163f9cf27c66352fda2032b1cff7cf5",
"0x80c900b129d880a3f13ec9c1942e1a12496b94a71ba15e965cae695e58344d7b",
"0xaa08eaca92fb722b4e0bcf9bce5b2703dba8f18ca3a9905082e0072270b3d0e2",
"0xce336994513315f4ccfb6bf573bdd9f58768a1bed6a996a69a07bdaa87b1a1de",
"0x9e765d49eb67801042aa8b4d84af73ee567073094403d059de2cfb1090e557e4",
"0x96dc234038fbb9fcc061f8bd82e7b9b3f2e9d80db07883e6233d836302a65ee1",
"0xfecce1b2c49b9d21c69668111ff220fad437920ace9dee8327eed53c18a2ec6b",
"0x57f45301bc961f7051bd6ad1ca7811681143f4503e994a4493958a4ab70bb370"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
