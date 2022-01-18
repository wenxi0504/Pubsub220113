import React, { Component } from 'react'
import { useParams } from 'react-router-dom';
import qs from 'querystring';

const DetailData=[
    {id:"01",content:"Hello world"},
    {id:"02",content:"GoodBye world"},
    {id:"03",content:"Love world"}
]

export default function Details (){
    // const {id, title} =useParams();
     const findDetailsData=DetailData.find(item=>item.id===id);

    //receive search argument
  
    const {search} =this.props.location;
    const {id,title}=qs.parse(search.slice(1))
   
        return (
            <ul>
                <li>ID:{id}</li>
                <li>Title:{title}</li>
                <li>Content:{findDetailsData.content}</li>

            </ul>
                
            
        )
    }

