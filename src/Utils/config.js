import * as bananaAbi from './ABIs/bananaAbi.json';
import * as nodeAbi from './ABIs/nodeAbi.json';
import * as LPAbi from './ABIs/LPtokenABI.json';
import {DEFAULT_NETWORK} from './network';

export const config = {
    networkId: DEFAULT_NETWORK,
    bananaAbi: bananaAbi.default,
    bananaAddress: "0x5B501bD7F4c30DE97E1666097074755CC826764c",
    nodeAbi: nodeAbi.default,
    nodeAddress: "0xBb0e1d84923e988f193677E965A59523a5D51346",
    LPAbi: LPAbi.default,
    pairAddress: "0x48FE1701e8Ae87AA02A329200a5bB6e94A7c222b"
};
