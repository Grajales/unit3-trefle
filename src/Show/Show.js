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
    varImages = showData.species.images
    let imageKeys = Object.keys(varImages)
    let speciesImg = []
    let speciesImg2 = []
    for (let i = 0; i < imageKeys.length; i++) {
      speciesImg.push(showData.species.images[Object.keys(varImages)[i]]);
      for (let j=0; j<3;j++){
        if(speciesImg[i][Object.keys(speciesImg)[j]]!==undefined){
      speciesImg2.push(speciesImg[i][Object.keys(speciesImg)[j]])
        }
      }
     }

    let galleryImg = [];
    let sc_name=showData.selectedSpecies 
    let c_name = showData.species.common_name;
    let duration = showData.species.duration
    let edible = showData.species.edible
    let ediblepart = showData.species.edible_part
    let famCname = showData.species.family_common_name
    let height= showData.species.specifications.average_height.cm
    let growth= showData.species.specifications.growth_habit
    if (speciesImg2 !== undefined) {
      galleryImg = speciesImg2.map((value, index) => {
        return (
             <img src={value.image_url} alt={value.altText} />
        )
      })
    }

    return (
      <div>
        <div className='Search'>
          <br></br>
          <h1 className='show-hdr'> The species <i> {sc_name}</i> </h1>
          <br></br>
          <p> This species common name is <i> {c_name} </i> and it is part of the <i>  {famCname}.</i>
          <p>
             It is a <i> {duration} </i>. It grows as a <i> {growth} </i> and its average height is <i> {height} </i> cm. </p>
             <p></p>The part that is edible is/are the <i> {ediblepart}.</i></p>
          {/* {if (edible ==true){<i>edible</i>} else {<i>not edible</i>}} */}
          <br></br>
          <h3>Available Images</h3>
          <br>
          </br>
          <div className='gallery'>
            {galleryImg}

          </div>
        </div>
      </div>
    );
  }
}
export default Show;