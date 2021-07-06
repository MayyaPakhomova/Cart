function password(length) {
  let password = '';
  const symbols =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!№;%:?*()_+=';
  for (let i = 0; i < length; i++) {
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));
  }
  return password;
}

export default function Cart(props) {
  const cart = props.cart;
  const goods = props.goods;

  return (
    <div>
      <table>
        <caption>Корзина</caption>
        <tbody>
          <tr>
            <th>Товар</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Общая стоимость</th>
            <th>Добавить</th>
            <th>Удалить</th>
            <th>Удалить все</th>
          </tr>
          {Object.keys(cart).map((item) => (
            <tr key={password(6) + item}>
              <td key={password(6) + item}>
                <img src={goods[item]['image']} alt={goods[item]['title']} />
                {goods[item]['title']}
              </td>
              <td key={password(6) + item}>{goods[item]['cost']}</td>
              <td key={password(6) + item}>{cart[item]}</td>
              <td key={password(6) + item}>
                {goods[item]['cost'] * cart[item]}
              </td>
              <td key={password(6) + item}>
                <button className='increment' data-key={item}>
                  + 1
                </button>
              </td>
              <td key={password(6) + item}>
                <button className='minus' data-key={item}>
                  - 1
                </button>
              </td>
              <td key={password(6) + item}>
                <button className='remove' data-key={item}>
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
