import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { minus, increment, remove, selectCart } from '../store/cartSlice';
import { selectGoods } from '../store/goodsSlice';
import Cart from '../components/Cart';

function CartList() {
  const goods = useSelector(selectGoods);
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const goodsObj = goods.reduce((accum, item) => {
    accum[item['articul']] = item;
    return accum;
  }, {});

  let sum = 0;
  Object.keys(cart).map((item) => (sum += goodsObj[item]['cost'] * cart[item]));

  function clickHandler(e) {
    e.preventDefault();
    let t = e.target;
    if (t.classList.contains('increment')) {
      dispatch(increment(t.getAttribute('data-key')));
    }
    if (t.classList.contains('minus')) {
      dispatch(minus(t.getAttribute('data-key')));
    }
    if (t.classList.contains('remove')) {
      dispatch(remove(t.getAttribute('data-key')));
    } else {
      return true;
    }
  }

  function basket() {
    let className = 'cart-field';
    if (sum > 1) {
      className = ' cart-field-active';
    }
    return (
      <div className={className} onClick={clickHandler}>
        <Cart cart={cart} goods={goodsObj} />
        <div className='total-amount'>
          <span>Общая сумма товаров в корзине: </span>
          <span className='total-number'> &nbsp; {sum}</span>
        </div>
      </div>
    );
  }

  return basket();
}

export default CartList;
