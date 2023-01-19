import { useState } from "react"
const fetch = require('node-fetch');



function Distance (props) {

    const [newForm, setNewForm] = useState({
        zipcode1: ''
    });


    const handleChange = event => {
        setNewForm({...newForm, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        searchZipcodes(newForm.zipcode1)
 
    }

    const [newDistance, setNewDistance] = useState({
        distance: 0
    });

    function searchZipcodes (zipcode1){
        let zipcode2 = '95051'
    
        const url = `https://global-zip-codes-with-lat-and-lng.p.rapidapi.com/api/v1/geocode/distanceByPostalCodes?postal_code1=${zipcode1}&postal_code2=${zipcode2}`;
    
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': '9dfd4daa07msh3c9fc8dad1f90d8p1927eajsnef873037c9d7',
            'X-RapidAPI-Host': 'global-zip-codes-with-lat-and-lng.p.rapidapi.com'
          }
        };
    
        let distanceInfo = '';
    
        
        fetch(url, options)
            .then(res => res.json())
            .then(json => setNewDistance(json.distance))
            .catch(err => console.error('error:' + err));
    
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    value={newForm.zipcode1}
                    name="zipcode1"
                    placeholder="zipcode"
                    onChange={handleChange}
                />
                <input type="submit" value="submit zipcode"/>
            </form>
        </section>
    )
}



export default Distance;