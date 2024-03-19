var CONTRACT_ADDRESS = "0x2F9315577D7f45025a50ca744F474069EbB2b1F3";
var tokenAddr = "0xe9e7cea3dedca5984780bafc599bd69add087d56"; 
var referrer = '0x40273c538768c68F1674505E6E9a0Cb036ee2811'
var upline = '0x40273c538768c68F1674505E6E9a0Cb036ee2811'

var sell = false;


var POOL = "0x0cfF03D61af4eF29a374B8aeEF8bbEdD6Abc63B5";

var ABI = [{"constant":true,"inputs":[],"name":"deals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"initialized","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getMyTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddr","type":"address"}],"name":"checkUser","outputs":[{"name":"ref","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"rt","type":"uint256"},{"name":"rs","type":"uint256"},{"name":"bs","type":"uint256"}],"name":"calculateTrade","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"marketTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS_SELL","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"ref","type":"address"},{"name":"amount","type":"uint256"}],"name":"buyMiners","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"eth","type":"uint256"}],"name":"calculateTokensBuySimple","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"amount","type":"uint256"}],"name":"devFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[],"name":"seedMarket","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"Dop","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"lastHatch","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"adr","type":"address"}],"name":"getTokensSinceLastHatch","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"getMyMiners","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"amountSell","type":"uint256"}],"name":"sellTokens","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"usersMiner","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"getFreeMiners_10BUSD","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"user","type":"address"}],"name":"MyReward","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"OneGetFree","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"eth","type":"uint256"},{"name":"contractBalance","type":"uint256"}],"name":"calculateTokensBuy","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"claimedTokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"Delevoper","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"REFERRAL_MINIMUM","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"REFERRAL_PERCENTS_BUY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"volume","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"SECONDS_WORK_MINER","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"amount","type":"uint256"}],"name":"devFee2","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":true,"inputs":[{"name":"tokens","type":"uint256"}],"name":"calculateTokensSell","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"BUY_MINERS","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"countUsers","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"reinvest","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_timer","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"referrer","type":"address"},{"indexed":false,"name":"lvl","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Action","type":"event"}];

var tokenAbi = [{"constant":false,"inputs":[],"name":"disregardProposeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"assetProtectionRole","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"r","type":"bytes32[]"},{"name":"s","type":"bytes32[]"},{"name":"v","type":"uint8[]"},{"name":"to","type":"address[]"},{"name":"value","type":"uint256[]"},{"name":"fee","type":"uint256[]"},{"name":"seq","type":"uint256[]"},{"name":"deadline","type":"uint256[]"}],"name":"betaDelegatedTransferBatch","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"sig","type":"bytes"},{"name":"to","type":"address"},{"name":"value","type":"uint256"},{"name":"fee","type":"uint256"},{"name":"seq","type":"uint256"},{"name":"deadline","type":"uint256"}],"name":"betaDelegatedTransfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"initializeDomainSeparator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"unfreeze","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"claimOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_newSupplyController","type":"address"}],"name":"setSupplyController","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"target","type":"address"}],"name":"nextSeqOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newAssetProtectionRole","type":"address"}],"name":"setAssetProtectionRole","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"freeze","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newWhitelister","type":"address"}],"name":"setBetaDelegateWhitelister","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"decreaseSupply","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"isWhitelistedBetaDelegate","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"whitelistBetaDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_proposedOwner","type":"address"}],"name":"proposeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"increaseSupply","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"betaDelegateWhitelister","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"proposedOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"unwhitelistBetaDelegate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_addr","type":"address"}],"name":"wipeFrozenAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"EIP712_DOMAIN_HASH","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_addr","type":"address"}],"name":"isFrozen","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"supplyController","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"reclaimBUSD","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"currentOwner","type":"address"},{"indexed":true,"name":"proposedOwner","type":"address"}],"name":"OwnershipTransferProposed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldProposedOwner","type":"address"}],"name":"OwnershipTransferDisregarded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"}],"name":"AddressFrozen","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"}],"name":"AddressUnfrozen","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"addr","type":"address"}],"name":"FrozenAddressWiped","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldAssetProtectionRole","type":"address"},{"indexed":true,"name":"newAssetProtectionRole","type":"address"}],"name":"AssetProtectionRoleSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"SupplyIncreased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"SupplyDecreased","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldSupplyController","type":"address"},{"indexed":true,"name":"newSupplyController","type":"address"}],"name":"SupplyControllerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"seq","type":"uint256"},{"indexed":false,"name":"fee","type":"uint256"}],"name":"BetaDelegatedTransfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldWhitelister","type":"address"},{"indexed":true,"name":"newWhitelister","type":"address"}],"name":"BetaDelegateWhitelisterSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"newDelegate","type":"address"}],"name":"BetaDelegateWhitelisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"oldDelegate","type":"address"}],"name":"BetaDelegateUnwhitelisted","type":"event"}]

var POOLABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"_reward","type":"uint256"}],"name":"GetReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_lastUser","type":"address"},{"indexed":false,"internalType":"uint256","name":"_timestamp","type":"uint256"}],"name":"PoolUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_newUser","type":"address"},{"indexed":false,"internalType":"uint256","name":"_timestamp","type":"uint256"}],"name":"UserUpdated","type":"event"},{"stateMutability":"nonpayable","type":"fallback"},{"inputs":[],"name":"amountPerHour","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"busdt","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUser","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mainContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"moment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_contractAddress","type":"address"}],"name":"setContractAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_time","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];

// CHAIN ID (56 - mainnet,  97 - testnet)
var NETWORK_ID = 56;

// Set RPC Node by default
var RPC_NODE = 'https://bsc-dataseed.binance.org/';

var walletConnected = false;

var contract, tokenContract, poolContract;

var currentAddr;

var gasPrice = '10000000000'; //10000000000

var bnbusdt;

var BUSDPrice = 0;
var TokenPrice = 0;
var userBUSDStaked = 0;
var userReqAirdropInv = 0;

var affiliate = 0;

var moment = 0;
var lastcall = 0;
var deposit = false;
var history123 = false;


const minimizeStr = (str, start = 5, end = 5) => {
    return str.slice(0, start) + "..." + str.slice(-end)
}


const swichNetwork = async (chainId) => {
    const currentChainId = await web3.eth.net.getId();

    if (currentChainId !== chainId) {
        try {
            await web3.currentProvider.request({
                method: 'wallet_switchEthereumChain',
                params: [{ chainId: Web3.utils.toHex(chainId) }],
            });
        } catch (switchError) {
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
                alert(`You should first add BSC (id: ${chainId}) in your wallet networks`)
            }
            return false;
        }
    }
    return true;
}


const Wallet = async () => {

    if (!walletConnected) {

        if (window.ethereum) {
            window.web3 = new Web3(ethereum)
            try {
                await ethereum.enable();
            } catch (error) {
                console.error(error);
            }
        } else if (window.web3) {
            window.web3 = new Web3(web3.currentProvider);
        }

        // Check chain ID and swich if possible
        let networkEnabled = swichNetwork(NETWORK_ID);
        console.log(await networkEnabled);

        if (await networkEnabled) {
            console.log(networkEnabled)
            let accounts = await web3.eth.getAccounts()
            currentAddr = accounts[0];
            if (currentAddr) {
                let address = minimizeStr(currentAddr);
                console.log("hi, your address: ", currentAddr)
                $("#connect-btn").text(address)
                $("#referral-link").val('https://' + window.location.host + '/?ref=' + currentAddr)
            }

            contract = await new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
            tokenContract = await new web3.eth.Contract(tokenAbi, tokenAddr);
            poolContract = await new web3.eth.Contract(POOLABI, POOL);

            walletConnected = true;
        }

    }

    return walletConnected;
}


// Helper for getting a str of time since date
const timeSince = (timestamp) => {
    var txDate = new Date(timestamp * 1000);
    var seconds = Math.floor((new Date() - txDate) / 1000);
    var interval = seconds / 31536000;

    if (interval > 1) {
        return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}


const Connect = () => {

    let web3 = new Web3(RPC_NODE);

    // This is local variables!
    let contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS)
    let tokenContract = new web3.eth.Contract(tokenAbi, tokenAddr)
    let poolContract = new web3.eth.Contract(POOLABI, POOL)

    setInterval(async () => {


        if (contract) {

            if (currentAddr) {
                contract.methods.getMyMiners(currentAddr).call().then(res => {
                    $("#myminers").html(` ${res} `);
                    console.log('My miners: ', res);
                })

                contract.methods.getMyTokens(currentAddr).call().then(res => {
                    $("#Tokens").text(res);
                    if (res > 0) {
                        console.log("Tokens: ", res);
                        contract.methods.calculateTokensSell(res).call().then(res2 => {
                            $("#myrewards").html(` ${(res2 / 1e18).toFixed(6)} BUSD`);
                            console.log(res2)
                            if (res/1e18 > 50) {
                                sell = true
                            };
                        })
                    }
                })
            }

            poolContract.methods.moment().call().then(res => {
                moment = res;
            })


            tokenContract.methods.balanceOf(POOL).call().then(res => {
                $("#contractbalancePOOL").html(` ${(res / 1e18).toFixed(2)} BUSD`);
            })

            poolContract.methods.lastUser().call().then(res => {
                $("#lastuserpool").text(res);
            })

        }
    }, 7000);
}



const BuyMin = async () => {
    if (await Wallet() && contract) {
        var trxspenddoc = document.getElementById('stake-input')
        
            contract.methods.buyMiners(upline, web3.utils.toWei(trxspenddoc.value)).send({ from: currentAddr, gasPrice: gasPrice, })
            


        

    }
}



const approveBUSD = async (trx) => {
    tokenContract.methods.approve(CONTRACT_ADDRESS, "999999999999999999999999").send({ from: currentAddr });
}

const reinvest = async () => {

    if (await Wallet() && contract && tokenContract) {
        const a = await tokenContract.method.balanceOf(currentAddr.toLowerCase()).call(); 

        const isMiners1 = await contract.methods.BUY_MINERS(currentAddr.toLowerCase()).call();

        if (a>=50*10**18) {

            contract.methods.buyMiners(upline, web3.utils.toWei(a.value)).send({ from: currentAddr, gasPrice: gasPrice, })

        } 
        else {
            if (isMiners1) {
                contract.methods.reinvest()
                .send({
                    from: currentAddr,
                    gasPrice: gasPrice,
                })
            }
             else {
                document.querySelector('.error-info').style.display = 'block'
    
                setTimeout(() => {
                    document.querySelector('.error-info').style.display = 'none'
    
                }, 5000)
             }
        }
        
    }
}

const removePopup = () => {
    $('.popup__wrapper').remove();
}

const getPopupHtml = (text) => {
    return `<div class="popup__wrapper">
        <div onclick="removePopup()" class="popup__overlay">
        </div>
        <div class="popup">
            <div class="popup__block divcontentl-wallet">
                 <div class="popup__close" onclick="removePopup()">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2C6.47,2 2,6.47 2,12C2,17.53 6.47,22 12,22C17.53,22 22,17.53 22,12C22,6.47 17.53,2 12,2M14.59,8L12,10.59L9.41,8L8,9.41L10.59,12L8,14.59L9.41,16L12,13.41L14.59,16L16,14.59L13.41,12L16,9.41L14.59,8Z" />
                    </svg>
                </div>
                <h2 class="h2">${text}</h2>
            </div>           
        </div>
    </div>`
}

const SellMin = async () => {

    if (await Wallet() && contract) {

        const rew = await contract.methods.MyReward(currentAddr.toLowerCase()).call()
        console.log(rew)
        if (rew < 40 * 10**18) {
            contract.methods.sellTokens(1)
                            .send({
                                from: currentAddr,
                                gasPrice: gasPrice,
                            })
        }
        else {
            contract.methods.reinvest()
            .send({
                from: currentAddr,
                gasPrice: gasPrice,
            })
        }

    }
}

const GetFreeMin = async () => {
    if (await Wallet() && contract) {
        const isGetFreeEgs = await contract.methods.OneGetFree(currentAddr.toLowerCase()).call()

        if (isGetFreeEgs) {
            document.querySelector('.error-egs').style.display = 'block'

            setTimeout(() => {
                document.querySelector('.error-egs').style.display = 'none'

            }, 5000)
        } else {   
            contract.methods.getFreeMiners_10BUSD()
            .send({
                from: currentAddr,
                gasPrice: gasPrice,
            })
        }
    }
}


const stakemax = async () => {
    if (await Wallet() && tokenContract) {
        tokenContract.methods.balanceOf(currentAddr).call().then(res => {
            $("#stake-input").val(Math.floor(res / 1e18));
        })
    }
}


const countDownTimer = () => {

    // Get timer DOM element
    let elmnt = document.getElementById('timer3');

    let timer = setInterval(() => {
        // Get current timestamp
        let currentTime = new Date().getTime();
        // Calculate distance
        let distance = (moment * 1000 + 3600000) - currentTime;

        if (distance > 0) {

            let minutes = Math.floor((distance / 1000 / 60) % 60);
            let seconds = Math.floor((distance / 1000) % 60);

            if (seconds < 10) seconds = '0' + seconds;
            if (minutes < 10) minutes = '0' + minutes;

            elmnt.innerHTML = minutes + ':' + seconds;
        } else {
            elmnt.innerHTML = "00:00";
        }

        // console.log(distance);

    }, 1000);

}
document.addEventListener('DOMContentLoaded', function () {
    const deadline = new Date(1658145600 * 1000);
    let timerId = null;
    function declensionNum(num, words) {
        return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    function startTimer() {
        const diff = deadline - new Date();
        if (diff <= 0) {
            clearInterval(timerId);
        }

        let elmnt2 = document.getElementById('timerstart');

        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        days2 = days < 10 ? '0' + days : days;
        hours2 = hours < 10 ? '0' + hours : hours;
        minutes2 = minutes < 10 ? '0' + minutes : minutes;
        seconds2 = seconds < 10 ? '0' + seconds : seconds;

        elmnt2.innerHTML = days2 + ' : ' + hours2 + ' : ' + minutes2 + ' : ' + seconds2;
        let now = Date.now() ;
        if (now >= 1658145600 * 1000) {
            timer = setInterval(updateClock, 1000);
        }


    }

    startTimer();
    timerId = setInterval(startTimer, 1000);
});

var startDateTime = new Date(1658145600 * 1000); // YYYY (M-1) D H m s ms (start time and date from DB)
var startStamp = startDateTime.getTime();

var newDate = new Date();
var newStamp = newDate.getTime();

var timer; // for storing the interval (to stop or pause later if needed)

function updateClock() {
    newDate = new Date();
    newStamp = newDate.getTime();
    var diff = Math.round((newStamp-startStamp)/1000);
    
    var d = Math.floor(diff/(24*60*60)); /* though I hope she won't be working for consecutive days :) */
    diff = diff-(d*24*60*60);
    var h = Math.floor(diff/(60*60));
    diff = diff-(h*60*60);
    var m = Math.floor(diff/(60));
    diff = diff-(m*60);
    var s = diff;
    d2 = d < 10 ? '0' + d : d;
    h2 = h < 10 ? '0' + h : h;
    m2 = m < 10 ? '0' + m : m;
    s2 = s < 10 ? '0' + s : s;

    let elmnt3 = document.getElementById('timerstart');
    
    elmnt3.innerHTML = d2 + ' : ' + h2 + ' : ' + m2 + ' : ' + s2;
}

function GetData(){
	return new Promise(function(resolve, reject) {
		let request = new XMLHttpRequest();
		
		request.open('GET', 'https://tothesmart.org/js/out.json?', true);
		
		request.onload = function() {
			if	(request.status == 200)
				resolve(request.responseText);
			else
				reject();
		}
		
		request.onerror = function() {
			reject();
		};
		
		request.send();
	});
}

	




GetData().then(function(responseText) {
	let now = new Date();
	const JsonObj = JSON.parse(responseText);
    console.log(JsonObj)
	document.getElementById('de2').innerHTML = JsonObj['dealsNow'];
	document.getElementById('us2').innerHTML = JsonObj['usersNow'];
	document.getElementById('vo2').innerHTML = JsonObj['volumeNow'];
    document.getElementById('ba2').innerHTML = JsonObj['balance'] + ' BUSD';
    document.getElementById('de').innerHTML = '+' + JsonObj['deals'];
	document.getElementById('us').innerHTML = '+' + JsonObj['users'];
	document.getElementById('vo').innerHTML = '+' + JsonObj['volume'];


}).catch(function() {
});





if (NETWORK_ID == 97) {
    RPC_NODE = 'https://data-seed-prebsc-2-s2.binance.org:8545/';
} else if (NETWORK_ID == 56) {
    RPC_NODE = 'https://bsc-dataseed.binance.org/';
}

abiDecoder.addABI(ABI);

window.onload = function () {
    countDownTimer();
    Connect();
}



