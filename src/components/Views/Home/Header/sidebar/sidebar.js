import React from "react";
import Sidebar from "react-sidebar";
import './sidebar.css'
class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: this.props.isOpen
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }


  render() {
    let bardata = (
      <div className="sidebar">
        <ul>
          <li>HOME</li>
          <li>ABOUT US </li>
          <li>MAN'S</li>
          <li>WOMAN'S</li>
          <li>CONTECT US</li>
        </ul>
      </div>
    )
    return (
      <Sidebar
        sidebar={bardata}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar>
    );
  }
}

export default SideBar;