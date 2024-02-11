import React from 'react'

const Features = ({params}:{params:{slug:string[]}}) => {
    if(params.slug.length===2){
        return<h1>View featuer {params.slug[0]} and concept {params.slug[1]}</h1>
    }
    else if(params.slug.length===1){
        return<h1>View featuer {params.slug[0]}</h1>
    }
  return (
    <div>
      <h1>cotaint page og doc</h1>
    </div>
  )
}

export default Features
