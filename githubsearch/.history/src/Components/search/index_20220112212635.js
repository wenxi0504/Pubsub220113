import React, { Component } from 'react'

export default class Search extends Component {
    search=  () => {
        // step1: get user input
      // 1) console.log(this.keyWordElement.value)
      //  2) this. has a object keywordelment, kwe has property
        //const{value}=this.keyWordElement
       // console.log(value)
       //3)continually de-construct and get value
        const{keyWordElement:{value}}=this
        console.log(value)
        // step2:send web request
    }
  

    
    render() {
        return (
            <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
              <input ref={c=>this.keyWordElement=c} type="text" placeholder="enter the name you search"/>&nbsp;
              <button onClick={this.search}>Search</button>
            </div>
          </section>
        )
    }
}
