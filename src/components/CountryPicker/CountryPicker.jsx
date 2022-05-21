import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchcountries } from '../../api';

const CountryPicker = ({handleCountryChange}) => {
    const [fetchCountriesData,setFetchCountriesData] = useState([]);
    useEffect(() =>{
        const fetchapi = async () =>{
            setFetchCountriesData(await fetchcountries());
        }
        fetchapi();
    },[setFetchCountriesData])

    console.log(fetchCountriesData);

    return (
        <FormControl className={styles.formcontrol}>
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Global</option>
                {fetchCountriesData.map((country, i)=>(
                    <option key={i} value={country}>{country}</option>
                ))}
            </NativeSelect>
        </FormControl>
    );
}
export default CountryPicker;