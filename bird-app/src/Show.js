import React, { Component } from 'react';
// import axios from 'axios';
import './Show.css';

class Show extends Component {
    constructor(props) {
        super(props)
        this.state = {
            common_name: '',
            edible: false,
        }
      }
    //   componentDidMount = () => {
    //      let resp = axios.get('https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/species/cocos-nucifera?token=Nx5vC1gM25R5WZl5kR7p0V3M7Ry2TXXubzAkG1bQals')
    //        .then(resp => {
    //         console.log(resp)
    //         this.setState({
    //           species: resp.data
    //         })
    
    //       })
    //       .catch(error => {
    //         console.log('look here', error)
    //       })
    //   }
    render(){
       
        console.log('Species in Show',this.props.species.species[0].data.images)
        let speciesFlower = this.props.species.species[0].data.images.flower
        let speciesTree = this.props.species.species[0].data.images.bark
        let speciesOther = this.props.species.species[0].data.images.$
        let galleryFlower = [];
        let galleryTree = [];
        let galleryOther= [];
        let c_name =this.props.species.species[0].data.common_name;
        let duration = this.props.species.species[0].data.duration
        let edible = this.props.species.species[0].data.edible
        let ediblepart= this.props.species.species[0].data.edible_part
        let famCname= this.props.species.species[0].data.family_common_name

        if (speciesFlower !== undefined) {
          galleryFlower = speciesFlower.map((value, index) => {
            return (
              <img src={value.image_url} alt={value.altText} />
            )
          })
        }
        if (speciesTree !== undefined) {
            galleryTree = speciesTree.map((value, index) => {
              return (
                <img src={value.image_url} alt={value.altText} />
              )
            })
          }
          if (speciesOther !== undefined) {
            galleryOther = speciesOther.map((value, index) => {
              return (
                <img src={value.image_url} alt={value.altText} />
              )
            })
          }

     return (
        <div> 
         <div className='Search'>
         <h1 className='show-hdr'>Species: {c_name}</h1>
         <p> This species is part of the <i>  {famCname} </i> and it is a <i> {duration} </i>, 
         it is {edible} and the part that is edible is/are the <i> {ediblepart} </i> </p>
         <h3>Images</h3>
            <div className='gallery'>
              {galleryFlower}
              {galleryTree}
              {galleryOther}
            </div>
         </div>
          </div>
        );
    }
}
export default Show;