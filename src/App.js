import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
}

function App() {

  const [items, setItems] = useState([]);

  const SortableItem = sortableElement(({ value }) => <li>{value}</li>);

  const SortableContainer = sortableContainer(({ children }) => {
    return <ul>{children}</ul>;
  });

  const fetchDataFromApi = () => {
    return axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(({ data }) => {
        return data;
      })
  }

  let i = 10;
  const getMoreData = () => {
    fetchDataFromApi()
      .then((data) => {
        console.log(items)
        setItems([...items, ...data.slice(i, i = i + 10)])
        console.log(items);
      })
  }

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };


  useEffect(() => {
    fetchDataFromApi()
      .then((data) => {
        setItems(data.splice(0, 10));
      })
  }, []);


  return (
    <>
      <div>
        <h1>This is an infinite scroll...</h1>
        <h3>scroll here...</h3>

        <SortableContainer onSortEnd={onSortEnd}>
          <InfiniteScroll
            next={getMoreData}
            hasMore={true}
            dataLength={items.length}
            loader={<h1>Loading...</h1>}
          >

            {items.map((item, index) => {
              const { id, title } = item;
              return <SortableItem key={`item-${id}`} index={id - 1} value={title} />
            })}

          </InfiniteScroll>
        </SortableContainer>

      </div>
    </>
  )

}


export default App;


// import React, { Component, useState } from 'react';
// import { sortableContainer, sortableElement } from 'react-sortable-hoc';
// import arrayMove from 'array-move';
// import Infinite from 'react-infinite';

// const SortableItem = sortableElement(({ value }) => {
//   return <li>{value}</li>;
// });

// const SortableInfiniteList = sortableContainer(({ items }) => {
//   return (
//     <Infinite
//       containerHeight={600}
//       elementHeight={items.map(() => 100)}
//     >
//       {items.map(({ value }, index) => (
//         <SortableItem
//           key={`item-${value}`}
//           index={index}
//           value={value}
//           height={100}
//         />
//       ))}
//     </Infinite>
//   );
// });

// function App() {

//   const [items, setItems] = useState([
//     { value: 'Item 1' },
//     { value: 'Item 2' },
//     { value: 'Item 3' },
//     { value: 'Item 4' },
//     { value: 'Item 5' },
//     { value: 'Item 6' },
//   ])

//   const [items, setItems] = useState([]);


//   const onSortEnd = ({ oldIndex, newIndex }) => {
//     setItems(arrayMove(items, oldIndex, newIndex));
//   };


//   return <SortableInfiniteList items={items} onSortEnd={onSortEnd} />;

// }

// export default App;