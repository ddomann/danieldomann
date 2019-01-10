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

    // var show_more_shows = document.getElementById("show_more_shows");
    // var shows_container = document.getElementById("shows_container");
    // var orig_show_height = shows_container.offsetHeight;

    // show_more_shows.onclick = function() {
    //   var shows_container = document.getElementById("shows_container");
    //   shows_container.style.transition = 'height .5s ease-in-out';
    //     shows_container.style.height = document.getElementById("shows_container").offsetHeight;
    //     this.style.display = 'none';
    //   };
  var shows_container = document.getElementById("shows_container");
  shows_container.style.height = 300 + 'px';

function collapseSection(element) {
  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.scrollHeight;
  
  // temporarily disable all css transitions
  var elementTransition = element.style.transition;
  element.style.transition = '';
  
  // on the next frame (as soon as the previous style change has taken effect),
  // explicitly set the element's height to its current pixel height, so we 
  // aren't transitioning out of 'auto'
  requestAnimationFrame(function() {
    element.style.height = sectionHeight + 'px';
    element.style.transition = elementTransition;
    
    // on the next frame (as soon as the previous style change has taken effect),
    // have the element transition to height: 0
    requestAnimationFrame(function() {
      element.style.height = 300 + 'px';
    });
  });
  
  // mark the section as "currently collapsed"
  element.setAttribute('data-collapsed', 'true');
}

function expandSection(element) {
  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.scrollHeight + 50;
  
  // have the element transition to the height of its inner content
  element.style.height = sectionHeight + 'px';

  // when the next css transition finishes (which should be the one we just triggered)
  element.addEventListener('transitionend', function(e) {
    // remove this event listener so it only gets triggered once
    element.removeEventListener('transitionend', arguments.callee);
    
    // remove "height" from the element's inline styles, so it can return to its initial value
    element.style.height = null;
  });
  
  // mark the section as "currently not collapsed"
  element.setAttribute('data-collapsed', 'false');
}

document.querySelector('#show_more_shows').addEventListener('click', function(e) {
  var section = document.querySelector('.collapsible');
  var isCollapsed = section.getAttribute('data-collapsed') === 'true';
  var btnText = document.querySelector('.showbtntext');

    
  if(isCollapsed) {
    expandSection(section)
    section.setAttribute('data-collapsed', 'false')
    btnText.textContent='Show Less';
  } else {
    collapseSection(section)
    btnText.textContent='Show More';

  }
});



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
      <tbody id="shows_container" className="collapsible" data-collapsed="true">
      { this.state.shows && this.state.shows.map((show, index) => (
        show.location &&
        <tr key={show.id}>
        <th><a href={"http://maps.google.com/?q=" + show.location} target="_blank" rel="noopener noreferrer">{show.location}</a></th>
        <th>{moment((show.start.date || show.start.dateTime)).format('MM/DD/YYYY')}</th>
        </tr> )
      )}
      </tbody>
      <tfoot id="show_more_shows" className="show_more_shows"><tr><th className="showbtntext">Show More</th></tr></tfoot>
      </table>
      </div>

    )

  }

}



export default Shows
