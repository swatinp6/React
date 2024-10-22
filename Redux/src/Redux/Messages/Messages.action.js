import { type } from "@testing-library/user-event/dist/type"

let GM='GM'
let GE='GE'

let gmAction=()=>{
    return { type:GM    }
}

let geAction=()=>{
    return { type:GE    }
}

export {gmAction,geAction,GM,GE}