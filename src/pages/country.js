import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


class Example extends Component {
  constructor (props) {
    super(props);
    this.state = { country: '', region: '' };
  }

  selectCountry (val) {
    this.setState({ country: val });
  }

  selectRegion (val) {
    this.setState({ region: val });
  }

  render () {
    const { country, region } = this.state;
    return (
        <>
      <div>
          <h5>Enter Country, City or Postal code</h5>
        <CountryDropdown
          value={country}
          onChange={(val) => this.selectCountry(val)} />
        <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)} />
      </div>
<div>
    <h4 style={{marginLeft:'120vh', marginTop:'-1vh'}}>Doctor's Speciality</h4>
</div>
</>      
    );
  }
}


export default Example