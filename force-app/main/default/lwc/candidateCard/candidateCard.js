import { LightningElement, track} from 'lwc';

export default class CandidateCard extends LightningElement {
    @track greeting = " World ";
    @track mouseEntered = false;

    changeHandler(event){
        this.greeting = event.target.value;
    }


    handleSelect(event){
        mouseEntered = true;
    }

}