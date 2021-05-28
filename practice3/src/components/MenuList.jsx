import React from 'react'
import  './MenuList.css'
 class MenuList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            // word:'',
            // seconds:0
        };
        // this.tick=this.tick.bind(this)

    }
    // let filterList=(this.props.list).filter(item=>(item.id >3) )
    render() {
        return (
            <div>
              {(this.props.list).filter(item=>(item.id <=3) ).map((obj,index)=>(
                  
                 <div className="container-menu" onClick={()=>this.props.onAdd(obj)}>
                     <div className="right">
                         <h4>{obj.name}</h4>
                         <p>{`Brew with ${obj.temp}°C water for ${obj.time}s`}</p>
                     </div>
                     <div className="left">
                         <p>{`${obj.temp}°C`}</p>
                         <p>{`${obj.time/60}.0 min`}</p>
                     </div>
                     
                 </div> 
              )
              )

              }  
            </div>
        )
    }
}
export default  MenuList
