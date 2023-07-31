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
            // console.log(this.properties.contestInfo);
            // let contestInfoJson = JSON.parse(this.properties.contestInfo);
            let contestName = this.properties.contest.contestName;
            let teamOneName = this.properties.contest.teamOneName;
            let teamTwoName = this.properties.contest.teamTwoName;
            let teamOneScore = this.properties.contest.teamOneScore;
            let teamTwoScore = this.properties.contest.teamTwoScore;
            this.setData({contestName, teamOneScore, teamTwoScore, teamOneName, teamTwoName});
        }
    }
})
