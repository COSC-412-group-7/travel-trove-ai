"use client"
import '../style/FlightSearch.css'
import React, { useState } from 'react';
import { useSession } from 'next-auth/react'
import Chat from './Chat'

export default function FlightSearch() {

    const [originLocationCode, setOriginLocationCode] = useState('');
    const [destinationLocationCode, setDestinationLocationCode] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [adults, setAdults] = useState('1');
    const [children, setChildren] = useState('0');
    const [infants, setInfants] = useState('0');
    const [cabin, setCabin] = useState('ECONOMY');
    const [currency, setCurrency] = useState('USD');
    const [maxPrice, setMaxPrice] = useState('');

    return (
        <div className="search-container">
            <div>
                <div className="row">
                    <div className="flight-search">Flight Search &#128747;</div>
                </div>
                <Chat />
                <form className="flight-form">
                    <div className="row">
                        <div className="form-group">
                            <label className="label">From</label>
                            <input 
                                type="text" 
                                placeholder="Airport" 
                                className="form-control" 
                                required="required"
                                name="originLocationCode"
                                value={originLocationCode}
                                onChange={(e) => setOriginLocationCode(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="label">To</label>
                            <input 
                                type="text" 
                                placeholder="Airport" 
                                className="form-control"
                                required="required"
                                name="destinationLocationCode"
                                value={destinationLocationCode}
                                onChange={(e) => setDestinationLocationCode(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label className="label">Depart</label>
                            <input 
                                type="date" 
                                placeholder="mm/dd/yyyy"
                                className="form-control"
                                required="required"
                                name="departureDate"
                                value={departureDate}
                                onChange={(e) => setDepartureDate(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label className="label">Return</label>
                            <input 
                                type="date" 
                                placeholder="One way" 
                                className="form-control"
                                name="returnDate"
                                value={returnDate}
                                onChange={(e) => setReturnDate(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label className="label">Adults 
                                <span className="sublabel"> 18+ </span>
                            </label>
                            <select className="form-select"
                                name="adults"
                                value={adults}
                                onChange={(e) => setAdults(e.target.value)}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="label">Children 
                                <span className="sublabel"> 2-17 </span>
                            </label>
                            <select className="form-select" id="children"
                                name="children"
                                value={children}
                                onChange={(e) => setChildren(e.target.value)}
                            >
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="label">Infants 
                                <span className="sublabel"> less than 2 </span>
                            </label>
                            <select className="form-select"
                                name="infants"
                                value={infants}
                                onChange={(e) => setInfants(e.target.value)}
                            >
                                <option value="0">0</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label className="label">Cabin</label>
                            <select className="form-select" id="cabin"
                                name="cabin"
                                value={cabin}
                                onChange={(e) => setCabin(e.target.value)}
                            >
                                <option value="ECONOMY">Economy</option>
                                <option value="PREMIUM_ECONOMY">Premium Economy</option>
                                <option value="BUSINESS">Business</option>
                                <option value="FIRST">First</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="form-check form-switch">
                                <input className="form-check-input align-self-center" type="checkbox" id="directFlights"/>
                                <label className="form-check-label d-inline-flex align-self-center">Direct
                                    flights</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group">
                            <label className="label">Currency</label>
                            <select className="form-select" id="currency"
                                name="currency"
                                value={currency}
                                onChange={(e) => setCurrency(e.target.value)}
                            >
                                <option value="USD">USD</option>
                                <option value="CAD">CAD</option>
                                <option value="EUR">EUR</option>
                                <option value="GBP">GBP</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="label">Max Price</label>
                            <input 
                                type="number" 
                                placeholder={currency} 
                                className="form-control"
                                name="maxPrice"
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(e.target.value)}
                            />
                        </div>
                    </div>
                    <button type="submit">Search flights</button>
                </form>
            </div>
        </div>
    )
}