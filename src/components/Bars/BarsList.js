import { Flipper } from 'react-flip-toolkit';
import BarItem from './BarItem';
import classes from './BarsList.module.css';
import { useSelector } from 'react-redux';

function BarsList() {
  const listData = useSelector((state) => state.list);
  const sortDelay = useSelector((state) => state.sortDelay);
  const animateList = sortDelay > 150;

  return (
    <Flipper flipKey={animateList && listData.map((d) => d.value).join('')}>
      <div className={classes.barsList}>
        <ul>
          {listData.map((item) => (
            <BarItem
              key={item.id}
              id={item.id}
              value={item.value}
              color={item.color}
              listSize={listData.length}
            />
          ))}
        </ul>
      </div>
    </Flipper>
  );
}

export default BarsList;
