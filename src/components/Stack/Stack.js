import React from 'react';

import StackListItem from '../StackListItem/StackListItem';
import Footer from '../Footer/Footer';

import { stackSectionTitle, stackListItems } from '../utils/constants';

function Stack() {

// const renderStack = stackList.map((item, index) => {
//   <div key={index}>
//     <StackList item={item}/>
//   </div>
// })

// localStorage.setItem('stackList', JSON.stringify(stackListItems));
// const qqq = JSON.parse(localStorage.getItem('stackList'));
// console.log('qqq');
// console.log(qqq);

  return(
    <section className='stack'>
      <h3 className='stack__title'>{stackSectionTitle}</h3>
      <div className='stack__list'>
        {/* {console.log('stackListItems')}
        {console.log(stackListItems)} */}
        {
          stackListItems.slice(0, stackListItems.length).map((item, index) => {
            return (
              <div key={index} className='stack__list_item'>
                <img className='stack__list_item_image' src={item.iconLink} />
                <p className='stack__list_item_title'>{item.name}</p>
              </div>
            )
          })
          // stackListItems.map((item, index) => {
          //   <div key={index}>
          //     {/* {console.log('item000')} */}
          //     {/* {console.log(item)} */}
          //     {/* {console.log('item.name000')} */}
          //     {/* {console.log(item.name)} */}
          //     {/* {item.name} */}
          //     {/* <p className='stack__title'>${item.name}</p> */}
          //     <StackListItem item={item}/>

          //   </div>
          // })
        }
      </div>
    </section>
  )
}

export default Stack;
