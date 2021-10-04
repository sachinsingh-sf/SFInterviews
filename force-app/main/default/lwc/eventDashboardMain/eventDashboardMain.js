import { LightningElement } from 'lwc';

export default class EventDashboardMain extends LightningElement {


    interactions = [
        {
            Id: 1,
            Desc: 'Technical Discussion - 1',
            NumberOfCandidates: 3,
        },
        {
            Id: 2,
            Desc: 'Technical Discussion - 2',
            NumberOfCandidates: 3,
        },
        {
            Id: 3,
            Desc: 'Manager Discussion - 1',
            NumberOfCandidates: 1,
        },
        {
            Id: 4,
            Desc: 'Manager Discussion - 2',
            NumberOfCandidates: 1,
        },
    ];


}