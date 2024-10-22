import { GM,GE } from "./Messages.action"

let initialstate={
    msg:"HELLO!!!!"
}

let messageReducer=(state=initialstate,action)=>{
    switch( action.type){
        case 'GM':
            return {msg:"GOOD MRNG" }
        case 'GE':
            return {msg:"GGOD EVNG"}
        default:
            return state
    }
}

export {messageReducer}