import React, { Component } from "react";

const Header = props => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">Of</span>
        <span className="the">The</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

// Destructured props - accessing only that property
// const Header = ({ tagline }) => (
//   <header className="top">
//     <h1>
//       Catch
//       <span className="ofThe">
//         <span className="of">Of</span>
//         <span className="the">The</span>
//       </span>
//       Day
//     </h1>
//     <h3 className="tagline">
//       <span>{tagline}</span>
//     </h3>
//   </header>
// );

// class Header extends Component {
//   render() {
//     return (
//       <header className="top">
//         <h1>
//           Catch
//           <span className="ofThe">
//             <span className="of">Of</span>
//             <span className="the">The</span>
//           </span>
//           Day
//         </h1>
//         <h3 className="tagline">
//           <span>{this.props.tagline}</span>
//         </h3>
//       </header>
//     );
//   }
// }

export default Header;