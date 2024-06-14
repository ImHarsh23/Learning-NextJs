'use client'
import React from 'react'

const Error = ({ error }) => {
    return (
        <main className='error'>
            <h1>An error occured</h1>
            <p>Failed to fetch Meal data please try to load again</p>
        </main>
    )
}

export default Error