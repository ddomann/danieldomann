import React from 'react'
import moment from 'moment'


class Shows extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      shows: []
    }
  }


  componentDidMount() {
    var yesterday = new Date(moment().add('days',-1)).toISOString()
    fetch(`https://www.googleapis.com/calendar/v3/calendars/0sa8bl67tpn9ibp6fe1ah3gclf7murdt@import.calendar.google.com/events?fields=items(summary,id,location,start)&key=AIzaSyDN1OE5ZvCa-v7AwzfK5bALAYXMXuOrNdU&singleEvents=true&orderBy=startTime&timeMin=${yesterday}`)
    .then(response => response.json())
    .then(data => this.setState({ shows: data.items }));
    //console.log(this.state.shows)
  }

  render () {

    return (
      <div>
      <h1>Shows</h1>
      <table className="table table-striped">
      <thead>
        <tr>
          <th colSpan="1"><h3>Location</h3></th>
          <th colSpan="1"><h3>Date</h3></th>
        </tr>
      </thead>
      <tbody id="shows_container">
      { this.state.shows && this.state.shows.map((show, index) => (
        show.location &&
        <tr key={show.id}>
        <th><a href={"http://maps.google.com/?q=" + show.location} target="_blank" rel="noopener noreferrer">{show.location}</a></th>
        <th>{moment((show.start.date || show.start.dateTime)).format('MM/DD/YYYY')}</th>
        </tr> )
      )}
      </tbody>
      </table>
      </div>

    )

  }

}



export default Shows
