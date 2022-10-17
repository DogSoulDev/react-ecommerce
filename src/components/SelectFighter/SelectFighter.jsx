import "./SelectFighter.css";
import { BsBagCheck } from "react-icons/bs";

function SelectFighter() {
  return (
    <>
    <div className="select_fighter__bg">
    <h3 className='select_fighter__text'>Select your <span className='fighter__word'>Fighter</span></h3>
    </div>
      <div className="select_fighter__container">
        <div className="select_fighter__container_fighter">
          <div className="select_fighter__container_fighter_info">
            <img
              src="https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/08/Jasonpng.png"
              alt=""
            />
            <p className="select_fighter__name">Jason statham</p>
            <p className="select_fighter__store">View Store</p>
            <span className='store_icons'>
					    <BsBagCheck size='4.5rem' />
				    </span>
          </div>
        </div>
        <div className="select_fighter__container_fighter">
          <div className="select_fighter__container_fighter_info">
            <img
              src="https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/08/Bruce.png"
              alt=""
            />
            <p className="select_fighter__name">Bruce Lee</p>
            <p className="select_fighter__store">View Store</p>
            <span className='store_icons'>
					    <BsBagCheck size='4.5rem' />
				    </span>
          </div>
        </div>
        <div className="select_fighter__container_fighter">
          <div className="select_fighter__container_fighter_info">
            <img
              src="https://wordpress-797010-2726389.cloudwaysapps.com/wp-content/uploads/2022/08/Keanu.png"
              alt=""
            />
            <p className="select_fighter__name">Keanu Reeves</p>
            <p className="select_fighter__store">View Store</p>
            <span className='store_icons'>
					    <BsBagCheck size='4.5rem' />
				    </span>
          </div>
        </div>
      </div>
      <div className="best_sellers">
          <h3>Products Best <span className='fighter__word'>Sellings</span></h3>
        </div>
    </>
  );
}

export default SelectFighter;
