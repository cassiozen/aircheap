import React, { Component, PropTypes } from 'react';
import Select from 'react-select';
import TicketItem from './components/TicketItem';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    let ticketList = this.props.tickets.map((ticket)=>(
      <TicketItem key={ticket.id} ticket={ticket} />
    ));
    return (
      <div>
        <header>
          <div className="header-brand">
            <img src={logo} alt="AirCheap" height="35"/>
            <p>Check discount ticket prices and pay using your AirCheap points</p>
          </div>
          <div className="header-route">

           <Select
               name="origin"
               value={this.props.origin}
               options={this.props.airports}
               onChange={this.props.onChooseAirport.bind(this,'origin')}
           />

          <Select
               name="destination"
               value={this.props.destination}
               options={this.props.airports}
               onChange={this.props.onChooseAirport.bind(this,'destination')}
           />

          </div>

        </header>
        <div>
          { ticketList }
        </div>
      </div>
    );
  }
}
App.propTypes = {
  airports: PropTypes.array.isRequired,
  origin: PropTypes.string,
  destination: PropTypes.string,
  tickets: PropTypes.array.isRequired,
  fetchAirports: PropTypes.func.isRequired,
  onChooseAirport: PropTypes.func.isRequired,
  fetchTickets: PropTypes.func.isRequired,
};
