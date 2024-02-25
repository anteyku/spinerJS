

class Spiner {
    constructor(domElem, speed){
        this.htmlClass = domElem;
        this.speedRotate = speed;
        this.rotate = 0;
        this.spinerMove = false;
        this.back = false; // Поворот вперед или назад
       
        
        document.querySelector(`${this.htmlClass}`).addEventListener(`click`, ()=>{
            this.clickUser()
        })
        
    }
    clickUser(){
            if (this.spinerMove === false) {
                this.spinerMove = true;
                this.moveRotate()
            }
    }
    moveRotate(){

        if(this.back === false){
            this.rotate++
        } else {
            this.rotate--;
        }
        
   

        document.querySelector(`${this.htmlClass}`).style.transitionDuration = `300ms`
        document.querySelector(`${this.htmlClass}`).style.transform = `rotate(${this.rotate}deg)`

        setTimeout(() => {

           
            if(this.rotate == 360){
                this.back = true;
                this.spinerMove = false;
                return;
            } else if(this.rotate == 0) {
                this.back = false;
                this.spinerMove = false;
                return;
            }

            this.moveRotate()
            
           
        }, this.speedRotate);
    }
}