import React from 'react'
import lsetf from './lsetflogo.jpg'
import usadf from './usadf.jpg'
import lofty from './lofty.inc.jpg'
import styled from 'styled-components'


function header() {
  return (
    <Container>
      <Tmg>
        <img src={lsetf}/><img src={usadf}/>
        <img src={lofty}/>
        <h1>DATABASE OF BENEFICIARIES OF THE LSETF INITIATIVE</h1>
         <h2>This database contains the profile and contact information
           of <br/>students/beneficaries of the software enegineering class
           cohort 5.
         </h2>
        </Tmg>
        
    
         


    
  
    </Container>
  )
}

export default header

const Container = styled.div` 
background: linear-gradient(to right top,#e1d5e3,#e30ec3);

height: 50vh;
width: 100%;

`
const Tmg = styled.div`
img{
  height: 80px;
  width: 80px;
  margin-left: 10px;
  border-radius: 50%;
  margin-top: 5px;
}
h1{
  margin-left: 50px;
  font-style: italic;
  font-weight: 10;
  display: flex;
  justify-content: center;
  
}
h2{
  margin-left: 100px;
  font-style: oblique;
  font-weight: 20;
  display: flex;
  justify-content: center;
}
  
`