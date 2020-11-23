import React from 'react';
import ReactDOM from 'react-dom';
import Database from './data.json';

import * as fs from 'fs';
import axios from 'axios';

class ReactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            CountryName: '',
            State: '',
            CovidCases: '',
            RecoveredCases: '',
            Latitude: '',
            Longitude: '',
            NewCases: '',
            Deaths: ''
        };

        this.handleChangeCountry = this.handleChangeCountry.bind(this);
        this.handleChangeCovidCases = this.handleChangeCovidCases.bind(this);
        this.handleChangeRecoveredCases = this.handleChangeRecoveredCases.bind(this);
        this.handleChangeLatitude = this.handleChangeLatitude.bind(this);
        this.handleChangeLongitude = this.handleChangeLongitude.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleChangeNewCases = this.handleChangeNewCases.bind(this);
        this.handleChangeDeaths = this.handleChangeDeaths.bind(this);
    }

    handleChangeCountry(event) {
        this.setState({ CountryName: event.target.value });
    }
    handleChangeCovidCases(event) {
        this.setState({ CovidCases: event.target.value });
    }
    handleChangeRecoveredCases(event) {
        this.setState({ RecoveredCases: event.target.value });
    }
    handleChangeLatitude(event) {
        this.setState({ Latitude: event.target.value });
    }

    handleChangeLongitude(event) {
        this.setState({ Longitude: event.target.value });
    }

    handleChangeState(event) {
        this.setState({ State: event.target.value });
    }

    handleChangeNewCases(event) {
        this.setState({NewCases: event.target.value});
    }

    handleChangeDeaths(event) {
        this.setState({Deaths: event.target.value});
    }

    handleSubmit(event) {
        let val = 0;
        if (Database.length === undefined) {
            val = 0;
        }

        let dataobj = {
            "uid":"",
            "Country_Name": this.state.CountryName,
            "State_Name": this.state.State,
            "Total_Cases": this.state.CovidCases,
            "Recovered_Cases": this.state.RecoveredCases,
            "New_Cases": this.state.NewCases,
            "Latitude": this.state.Latitude,
            "Longitude": this.state.Longitude,
            "Deaths": this.state.Deaths
        }
        axios.post('/api/user',{dataobj})
        .then((res) => {
                console.log(res);
                console.log(res.data);
            })

        axios.get('/api/user/getall')
        .then((res) => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <>
                <form>
                    <label>
                        Country Name:-
                        <br />
            <input type="text" value={this.state.CountryName} onChange={this.handleChangeCountry} />
                    </label><br />
                    <label>
                        State Name:-
            <input type="text" value={this.state.State} onChange={this.handleChangeState} />
                    </label><br />
                    <label>
                        No of Covid Cases:-
                        <br />
            <input type="text" value={this.state.CovidCases} onChange={this.handleChangeCovidCases} />
                    </label><br />
                    <label>
                        No of Recovered Cases:-
                        <br />
            <input type="text" value={this.state.RecoveredCases} onChange={this.handleChangeRecoveredCases} />
                    </label><br />
                    <label>
                        Deaths:-
                        <br />
            <input type="text" value={this.state.Deaths} onChange={this.handleChangeDeaths} />
                    </label><br />
                    <label>
                        New Cases:-
                        <br />
            <input type="text" value={this.state.NewCases} onChange={this.handleChangeNewCases} />
                    </label><br />
                    <label>
                        Latitude Of the Country:-
                        <br />
            <input type="text" value={this.state.Latitude} onChange={this.handleChangeLatitude} />
                    </label><br />
                    <label>
                        Longitude Of the Country:-
                        <br />
            <input type="text" value={this.state.Longitude} onChange={this.handleChangeLongitude} />
                    </label><br />
                </form>
                <input type="submit" value="Submit" onClick={this.handleSubmit} />
            </>
        );
    }
}

export default ReactForm;