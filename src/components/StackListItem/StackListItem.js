import React from 'react';

function StackListItem(props) {
  // console.log('listItem.name');
  // console.log(props.listItem);
  return(
    // <div className='stack__title'>
    //   {item.name}
    // </div>
    <p className='stack-list-item'>Привет</p>
    // <>
    //   {/* <p className='stack__title'>${props.listItem.name}</p> */}
    //   {/* {console.log(props.listItem.name)} */}
    // </>

      // <div className='stack__list'>
      //   {
      //     stackList.map((item, index) => {
      //       <div key={index}>
      //         <div className='stack__title'>${item.name}</div>
      //       </div>
      //     })
      //   }
      // </div>
  )
}

export default StackListItem;
