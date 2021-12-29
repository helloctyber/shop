export default class ToyotaBreak {

    applyPressure(presureLevel){
        if(presureLevel  > 20){
            return "Fullstop"
        }else{
            return "slowing down"
        }
    }
    
     fullPressure(){
        return 'fullstop'
    }
}


