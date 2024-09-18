import React from 'react';
import styles from './Contact.modules.css';
import locationIcon from '../../../pictures/icons/location.svg';
import locationIconSmall from '../../../pictures/icons/location_small.svg';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";
import {logDOM} from "@testing-library/react";
import {useDispatch, useSelector} from "react-redux";
import {postUserInfo} from "../../../store/LocationPageSlice";

const options = [
    { value: 'russia', label: 'Russia' },
    { value: 'kyrgyzstan', label: 'Kyrgyzstan' },
    { value: 'usa', label: 'USA' },
    { value: 'japan', label: 'Japan' },
    { value: 'mongolia', label: 'Mongolia' },
];

const Contact = ({representative,title}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control,
    } = useForm({
        mode: 'onChange',
    });

    const user = useSelector((state) => state.locationReducer.user);
    const dispatch = useDispatch();

    const handlerSubmit = (data) => {
        dispatch(postUserInfo(data));
        reset();
        alert('Thanks for fulfilling the form');
    };
    return (
        <div className='contacts'>
            <div className="container">
                <div className="contacts-wrapper">
                    <div className="contacts-wrapper__card">
                        <div className="contacts-wrapper__card__icon">
                            <img src={locationIcon} alt="icon"/>
                        </div>
                        <div className="contacts-wrapper__card__content">
                            <span>{title}</span>
                        </div>
                        <div className='contacts__card__icon__small'>
                            <img src={locationIconSmall} alt="icon"/>
                            <span>
                                Cherkesskaya street, 16
                                <br/>
                                Bishkek, Kyrgyzstan
                            </span>
                        </div>
                    </div>
                    <div className="contacts-wrapper__card">
                        <div className="contacts-wrapper__card__icon">
                            <img src={locationIcon} alt="icon"/>
                        </div>
                        <div className="contacts-wrapper__card__content">
                            <span>{representative}</span>
                        </div>
                        <form className='form-inputs' onSubmit={handleSubmit(handlerSubmit)}>
                            <TextField
                                className='input'
                                type="text"
                                {...register('firstName', {
                                    required: 'This field is required',
                                })}
                                id="standard-basic"
                                label="First Name * "
                                variant="standard"
                            />
                            {errors.firstName && <div className='error_style'>{errors.firstName.message}</div>}

                            <TextField
                                className='input'
                                type="text"
                                {...register('lastName', {
                                    required: 'This field is required',
                                })}
                                id="standard-basic"
                                label="Last Name *"
                                variant="standard"
                            />
                            {errors.lastName && <div className='error_style'>{errors.lastName.message}</div>}

                            <TextField
                                className='input'
                                type="text"
                                {...register('phoneNumber', {
                                    required: 'This field is required',
                                    pattern: {
                                        value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                                        message: 'Please enter valid phone number',
                                    },
                                })}
                                id="standard-basic"
                                label="Phone Number *"
                                variant="standard"

                            />
                            {errors.phoneNumber && <div className='error_style'>{errors.phoneNumber.message}</div>}

                            <TextField
                                className='input'
                                type="text"
                                {...register('email', {
                                    required: 'This field is required',
                                    pattern: {
                                        value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                                        message: 'Please enter a valid email address',
                                    },
                                })}
                                id="standard-basic"
                                label="Email *"
                                variant="standard"
                            />
                            {errors.email && <div className='error_style'>{errors.email.message}</div>}
                            <Controller
                                control={control}
                                name='address.country'
                                rules={{
                                    required: 'Country is required',
                                }}
                                render={({field: {onChange, value}, fieldState: {error}}) => (
                                    <div>
                                        <Select
                                            className='country-select'
                                            placeholder='Countries'
                                            options={options}
                                            value={options.find(option => option.value === value)}
                                            onChange={onChange}
                                        />
                                        {error && <div className='error_style'>{error.message}</div>}
                                    </div>
                                )}
                            />
                            <Button  type='submit' variant="outlined" color='inherit'>Submit</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;