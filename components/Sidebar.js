import { useDispatch, useSelector } from 'react-redux';
import { updateCategory, updateMenuOpen } from 'redux/utils';
import { CATEGORIES } from 'utils/constants';

const Sidebar = () => {
  const utils = useSelector((state) => state.utils);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    dispatch(updateCategory(event.target.innerHTML));
  };

  const handleMenuClose = () => {
    dispatch(updateMenuOpen());
  };

  return (
    <div
      className={`sidebar__container ${utils.menuOpen && 'sidebar__active'}`}
    >
      <div className="sidebar__header">
        <h1>The Daily news</h1>
        <h3>India</h3>
      </div>
      <div
        className={`close ${utils.menuOpen ? 'close' : undefined}`}
        onClick={handleMenuClose}
      >
        &#x2715;
      </div>
      <div className="sidebar__body">
        {CATEGORIES.map((category, key) => (
          <span
            key={key}
            onClick={handleClick}
            className={utils.category === category ? 'active' : undefined}
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
