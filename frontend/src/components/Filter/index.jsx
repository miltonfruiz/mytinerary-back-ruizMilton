// import React, { useEffect, useRef } from "react";
// import Cards from "../Cards";
// import { useSelector, useDispatch } from "react-redux";
// import cityActions from "../../store/actions/city";

// export default function Filter() {
//   let cityInStore = useSelector((store) => store.cityReducer.city);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(cityActions.filter_city());
//   }, []);

//   return (
//     <>
//       <section className="sectionContainer">
//         <div className="row justify-content-center d-flex ">
//           <h2 className="col-8 mt-5">Details</h2>
//         </div>
//         <div className="row justify-content-center d-flex ">
//           {cityInStore.map((array) => (
//             <Cards
//               cardLink={array.images}
//               cardTitle={array.city}
//               cardDescription={array.country}
//             />
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }
