// import { Fragment } from 'react';
// import HeaderCartButton from './HeaderCartButton';
// // import mealsImage from '../../assets/meals.jpg'
// import classes from './Header.module.css';
// const Header = (props) =>{
// return(
// <Fragment>
//   <header className={classes.header}>
//     <h1>ReactMeals</h1>
//     <HeaderCartButton />
//   </header>
//   <div className={classes['main-image']}>
//     <img src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true" alt="A table full of delicious meals" />
//   </div>
// </Fragment>

// );


// };
// export default Header;
import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
// import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src="https://github.com/academind/react-complete-guide-code/blob/11-practice-food-order-app/extra-files/meals.jpg?raw=true" alt="A table full of delicious meals" />
      </div>
    </Fragment>
  );
};

export default Header;