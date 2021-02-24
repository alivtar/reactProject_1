// import React, { Component, useState } from 'react';
// import { sortableContainer, sortableElement } from 'react-sortable-hoc';
// import arrayMove from 'array-move';
// import Infinite from 'react-infinite';

// const SortableItem = sortableElement(({ value }) => {
//     return <li>{value}</li>;
// });

// const SortableInfiniteList = sortableContainer(({ items }) => {
//     return (
//         <Infinite
//             containerHeight={600}
//             elementHeight={items.map(() => 100)}
//         >
//             {items.map(({ value }, index) => (
//                 <SortableItem
//                     key={`item-${value}`}
//                     index={index}
//                     value={value}
//                     height={100}
//                 />
//             ))}
//         </Infinite>
//     );
// });

// function App() {

//     // const [items, setItems] = useState([
//     //   { value: 'Item 1' },
//     //   { value: 'Item 2' },
//     //   { value: 'Item 3' },
//     //   { value: 'Item 4' },
//     //   { value: 'Item 5' },
//     //   { value: 'Item 6' },
//     // ])

//     const [items, setItems] = useState([]);


//     const onSortEnd = ({ oldIndex, newIndex }) => {
//         setItems(arrayMove(items, oldIndex, newIndex));
//     };


//     return <SortableInfiniteList items={items} onSortEnd={onSortEnd} />;

// }

// export default App;