// components/horizontal_scroll_contest_card/horizontal_scroll_contest_card.ts
Component({
    /**
     * Component properties
     */
    properties: {
        contestInfo:String // this is JSON
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
            let contestInfoJson = JSON.parse(this.properties.contestInfo);
            let contestName = contestInfoJson.contestName;
            let teamOneName = contestInfoJson.teamOneName;
            let teamTwoName = contestInfoJson.teamTwoName;
            let teamOneScore = contestInfoJson.teamOneScore;
            let teamTwoScore = contestInfoJson.teamTwoScore;
            this.setData({contestName, teamOneScore, teamTwoScore, teamOneName, teamTwoName});
        }
    }
})
