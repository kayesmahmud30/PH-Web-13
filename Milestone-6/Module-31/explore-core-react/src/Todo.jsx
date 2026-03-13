// export default function ToDo({task, isDone}){

//     return(
//         <li>Task: {task}</li>
//     )
// }

// export default function ToDo({ task, isDone }) {
//   if (isDone) {
//     return <li>done: {task}</li>;
//   } else {
//     return <li>Pending: {task}</li>;
//   }
// }

// export default function ToDo({ task, isDone, time = 0 }) {
//   if (isDone) {
//     return (
//       <li>
//         Done: {task} Duration: {time}
//       </li>
//     );
//   }
//   return <li>To be done: {task}</li>;
// }

//Conditional rendering: 3 Ternary..............
// condition ? true : false

// export default function ToDo({ task, isDone, time = 0 }) {
//   return isDone ? (
//     <li>
//       {" "}
//       Done: {task} Time: {time}
//     </li>
//   ) : (
//     <li>Not Done: {task}</li>
//   );
// }

// Conditional rendering: 4 && .....
// export default function ToDo({ task, isDone, time = 0 }) {
//   return (
//     isDone && (
//       <li>
//         Done Task:{task} Time: {time}
//       </li>
//     )
//   );
// }

// Conditional rendering: 55 || .....
// export default function ToDo({ task, isDone, time = 0 }) {
//   return isDone || <li>Not Done Task:{task} Time: {time}</li>;
// }

// Conditional Rendering: 6 use variable.
export default function ToDo({ task, isDone, time }) {
  const displayTime = time ? time : 100;
  let listItem;

  if (isDone) {
    // listItem =<li>Done: {task} time: {displayTime}</li>
    listItem =<li>Done: {task} time: {time ? 'I am Done' : 'Not done yet'}</li>
} else {
    listItem = <li>Pending: {task}</li>;
  }
  return listItem;
}

// Ternary(?), Or(||), and(&&) ----> Theme of conditional rendering.
