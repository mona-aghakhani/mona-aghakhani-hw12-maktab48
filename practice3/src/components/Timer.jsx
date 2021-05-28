import React from 'react'

 class Timer extends React.Component {
    constructor(props){
        super(props);
        this.state={
            time:{m:this.props.selectedData.time/60,s:this.props.selectedData.time%60},
            seconds:this.props.selectedData.time
        };
        this.timer=0;
        this.countDown=this.countDown.bind(this)

    }
    
    secondsToTime(secs){
        let minutes=Math.floor(secs/60)
        let seconds=secs %60;
        let obj={"m":minutes,"s":seconds};
        return obj
    }
    countDown() {
        let seconds= this.state.seconds -1;
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds,
          });
          
          // Check if we're at zero.
          if (seconds === 0) { 
            clearInterval(this.timer);
          }
        // if (this.state.seconds < this.props.selectedData.time) {
        //     this.setState(prevState => ({
        //         seconds: prevState.seconds + 1
        //     }));
        // }else{
        //     this.setState(prevState => ({
        //         seconds: 0
        //     }));
        // }
    }
    componentDidMount() {
        // if (this.props.show){
        //     console.log(2);
        let timeLeft= this.secondsToTime(this.state.seconds)
        this.setState({time:timeLeft})
        if (this.timer === 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000);
          }
        // }
        // this.interval = setInterval(() => this.countDown(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <p className="timer">{this.state.time.m} : {this.state.time.s} left </p>
            </div>
        )
    }
}
export default Timer