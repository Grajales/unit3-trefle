import React, { Component } from 'react';
import './Show.css';
var varImages;

class Show extends Component {
  constructor(props) {
    super(props)
    this.state = {
      common_name: '',
      edible: false,
    }
  }

  render() {
    console.log("Show page props: ", this.props);
    let showData = this.props.location.state
    console.log("Show page props selected: ", showData.selectedSpecies);
    console.log("Show page props location.state.species: ", showData.species);

    varImages = showData.species.images
    let imageKeys = Object.keys(varImages)
    // console.log("varImages",Object.keys(varImages))
    console.log("varImages", imageKeys)
    let speciesImg = []
    for (let i = 0; i < imageKeys.length; i++) {
      let imageCount=showData.species.images[Object.keys(varImages)[i]].length;
      console.log("numbr of images per key",imageCount);
      speciesImg = showData.species.images[Object.keys(varImages)[i]];
      }
    
    console.log(speciesImg)

    let galleryImg = [];

    let c_name = showData.species.common_name;
    let duration = showData.species.duration
    let edible = showData.species.edible
    let ediblepart = showData.species.edible_part
    let famCname = showData.species.family_common_name

    if (speciesImg !== undefined) {
      galleryImg = speciesImg.map((value, index) => {
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
          {/* {if (edible ==true){<i>edible</i>} else {<i>not edible</i>}} */}
          <h3>Images</h3>
          <div className='gallery'>
            {galleryImg}

          </div>
        </div>
      </div>
    );
  }
}
export default Show;