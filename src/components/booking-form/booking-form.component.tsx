import React, { useState } from 'react';
import './booking-form.styles.scss';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import { TrainingTypes, StreamTypes, PriceTypes } from '../../data/training';
import { getDateInWords } from '../dates-table/dates-table.component';
import { countries, primaryMarket, tertiaryMarket } from '../../data/countries';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface BookingFormTypes {
    training: TrainingTypes,
    stream: StreamTypes
}

const BookingForm: React.FC<BookingFormTypes> = ({ training, stream }) => {
    const [country, setCountry] = useState("United Kingdom");
    const [bookPrice, setBookPrice] = useState(stream.price[0].amount.toString());
    const handleChange = (event: any) => {
        setCountry(event.target.value);
        // for(let i=0; i<stream.price.length; i++) {

        // }
        if (primaryMarket.includes(event.target.value)) {
            setBookPrice(stream.price[0].amount.toString())
        } else if (tertiaryMarket.includes(event.target.value)) {
            setBookPrice(stream.price[1].amount.toString())
        } else {
            setBookPrice(stream.price[2].amount.toString())
        }
    };
    return (
        <div className="booking-form">
            <h3>{training.title}</h3>
            { getDateInWords(new Date(stream.startDate)) } 
            <span> </span>
            -
            <span> </span>
            <br className="xs-visible" />
            { getDateInWords(new Date(stream.endDate)) }
            <br /><br />
            <label>Where do you live?</label>
            <br />
            
            <select onChange={handleChange} defaultValue={country}>
                {
                    countries.map(c => {
                        return (
                            <option value={c} key={c} >{c}</option>
                        )
                    })
                }
            </select>
            <a 
                id="addToCart"
                className="button button-primary button-primary-small"
                href={
                    encodeURI(`https://valuehut.foxycart.com/cart?name=${training.title}
                    &Start Date=${getDateInWords(stream.startDate)}
                    &Time=${stream.time}
                    &price=${bookPrice}`)
                } 
            >
                BOOK FOR $ {bookPrice}
            </a>
        </div>
    )
}

export default BookingForm;