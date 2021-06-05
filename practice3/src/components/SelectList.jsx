import React from 'react'

 class SelectList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            // word:'',
            // seconds:0
        };
        // this.tick=this.tick.bind(this)

    }
    
    render() {
    const timenew=this.props.secondsToTime(this.props.selectedData.time);

        // console.log(this.props.selectedData.time);
        // console.log(this.props.time);
        // console.log(this.props.time.length);
        return (
            <div>
              <h2>{this.props.selectedData.name}</h2>
              {/* <h1>{timenew}</h1> */}
        {this.props.time !== "" ? <h1 className="timer">{this.props.time} </h1> : <h1>{timenew}</h1> }

              {/* <h1>{`${this.props.selectedData.time/60}.0min left`}</h1>   */}
            </div>
        )
    }
}
export default SelectList
