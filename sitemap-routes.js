import React from 'react';
import { Route } from 'react-router';
import { training } from './src/data/training.ts';

const trainings = training.training;

export default (
    <Route>
        <Route path='/' />
        <Route path='/contact' />
        <Route path='/services'>
            <Route path='training'>
            {
            trainings.map((tr, i) => (
                <Route 
                path={tr.title.toLowerCase().split(" ").join("-")} 
                />
            ))
            }  
            </Route>
            <Route path='coaching' />
            <Route path='consultancy' />
        </Route>
        <Route path='/about' />
    </Route>
);