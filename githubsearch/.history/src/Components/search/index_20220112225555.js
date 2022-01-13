import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    // search=  () => {
    //     // step1: get user input
    //   // 1) console.log(this.keyWordElement.value)
    //   //  2) this. has a object keywordelment, kwe has property
    //     //const{value}=this.keyWordElement
    //    // console.log(value)
    //    //3)continually de-construct and get value
    //     const{keyWordElement:{value}}=this
    //     console.log(value)
    //     //  const{keyWordElement:{value:keyword}}=this
    //    // console.log(keyword)

    //     // step2:send web request
    //     //https://api.github.com/search/users?q=${value}
    //     axios.get(`https://localhost:5000/search/users?q=${value}`).then(
    //         response=>{
    //           //console.log('successful',response.data);
    //           this.props.saveUsers(response.data.items)
    //       },
    //         error=>{console.log('failed',error);}
    //     )
    // }
  
    search=()=>{
      const {keyWordElement:{value:keyWord}}=this
      //update app state before sending request
      this.props.updateAppState({isFirst:false,isLoading:true})

      axios.get(`https://localhost:5000/search/users?q=${keyWord}`).then(
                response=>{
                  //console.log('successful',response.data);
                  //notice app to update state after the request successfully 
                  this.props.updateAppState({isLoading:false,users:response.data.items})
              },
              this.props.updateAppState({isLoading:false,err:"error"})
            )

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
