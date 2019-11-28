import React from 'react';

let AddLocation = (props) => {
  let toggleTab = () => {
    let add = document.getElementById('tab-add-loc');
    let addBtn = document.getElementById('add-tab-btn');
    let view = document.getElementById('tab-view-loc');
    let viewBtn = document.getElementById('view-tab-btn');

    if(addBtn.classList.contains('selected')) {
      addBtn.classList.remove('selected');
      viewBtn.classList.add('selected');
      add.style.display = 'none';
      view.style.display = 'flex';
    }else {
      addBtn.classList.add('selected');
      viewBtn.classList.remove('selected');
      add.style.display = 'flex';
      view.style.display = 'none';
    }
  }
  return (
    <div className="add-location">
      <div className="tab-controller">
        <button onClick={toggleTab} id="add-tab-btn"className="selected">Add a Location</button>
        <button onClick={toggleTab} id="view-tab-btn">View Locations</button>
      </div>
      <div className="tabs">
        <div id="tab-add-loc" className="tab">
          <form>
            <label htmlFor="zip">Add by Zip Code:</label>
            <input type="text" id="zip" placeholder="Enter a Zip Code"></input>
            <button type="submit">Add Location</button>
          </form>
        </div>
        <div id="tab-view-loc" className="tab" style={{'display':'none'}}>
          <table>
            <thead>
              <tr>
                <th>Zip Code</th>
                <th>Last Active</th>
                <th>Set Active</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>37064</td>
                <td>10 minutes ago</td>
                <td className="setBtn"><button>Set</button></td>
              </tr>
              <tr>
                <td>37064</td>
                <td>10 minutes ago</td>
                <td className="setBtn"><button>Set</button></td>
              </tr>
              <tr>
                <td>37064</td>
                <td>10 minutes ago</td>
                <td className="setBtn"><button>Set</button></td>
              </tr>
              <tr>
                <td>37064</td>
                <td>10 minutes ago</td>
                <td className="setBtn"><button>Set</button></td>
              </tr>
              <tr>
                <td>37064</td>
                <td>10 minutes ago</td>
                <td className="setBtn"><button>Set</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AddLocation;