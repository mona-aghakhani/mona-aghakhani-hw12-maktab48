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
        return (
            <div>
              <h2>{this.props.selectedData.name}</h2>
              <h1>{`${this.props.selectedData.time/60}.0min left`}</h1>  
            </div>
        )
    }
}
export default SelectList
