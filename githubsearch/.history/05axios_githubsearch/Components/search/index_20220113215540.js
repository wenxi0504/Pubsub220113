import React, { Component } from "react";
import PubSub from "pubsub-js";
import axios from "axios";

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

  /*
    search=()=>{
      const {keyWordElement:{value:keyWord}}=this
      //update list state before sending request
      // this.props.updateAppState({isFirst:false,isLoading:true})

      axios.get(`https://localhost:5000/search/users?q=${keyWord}`).then(
                response=>{
                  //console.log('successful',response.data);
                  //notice app to update state after the request successfully 
                 // this.props.updateAppState({isLoading:false,users:response.data.items})
              },
              error=>{
              this.props.updateAppState({isLoading:false,err:error.message})}
            )

    }
    */

  search = () => {
    const {
      keyWordElement: { value: keyWord },
    } = this;
    PubSub.publish("atguigu", { isFirst: false, isLoading: true });
    
    // axios.get(`https://localhost:5000/search/users?q=${keyWord}`).then(
    //   (response) => {
    //     PubSub.publish("atguigu", {
    //       isLoading: false,
    //       users: response.data.items,
    //     });
    //   },
    //   (error) => {
    //     PubSub.publish("atguigu", { isLoading: false, err: error.message });
    //   }
    // );
    
    // send internet request --by fetch send
    fetch(`https://localhost:5000/search/users?q=${keyWord}`).then
    (
      response=>{console.log('successfully connect to server');
      return response.json(); //r.j is a instance object of promise
    },
    //   error=>{console.log('failed',error);
    //   return new Promise(()=>{})
    // }
    ).then(
      response=>{console.log('receive data successfully',response);},
      // error=>{console.log('receive data failed',error)}

    ).catch(
      (error)=>{console.log(error)}
    )
  
  
  };

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => (this.keyWordElement = c)}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}
