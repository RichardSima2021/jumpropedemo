// components/horizontal_scroll_contest_card/horizontal_scroll_contest_card.ts
import {ContestInfo} from './types';
Component({
    /**
     * Component properties
     */
    properties: {
        contest:Object // this is JSON
    },

    /**
     * Component initial data
     */
    data: {
        contestName: String,
        teamOneScore: Number,
        teamTwoScore: Number,
        teamOneName: String,
        teamTwoName: String,
        streamStatus:"直播回放"
    },

    /**
     * Component methods
     */
    methods: {

    },
    lifetimes:{
        attached(){
            // console.log(this.properties.contest);
            const {contestName, teamOneScore, teamTwoScore, teamOneName, teamTwoName} = this.properties.contest;
            this.setData({contestName, teamOneScore, teamTwoScore, teamOneName, teamTwoName});
        }
    }
})
