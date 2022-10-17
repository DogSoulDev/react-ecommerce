import "./Ranking.css";

function Ranking() {
  return (
    <>
      <div className="ranking__container">
        <div className="ranking__container_fighter1">
          <span className="ranking__number">#1</span>
          <span className="ranking__store">FightClub Store</span>
          <span className="ranking__fighter">Jason Statham</span>
          <span className="ranking__sold">23.567</span>
          <span className="ranking__sold_items">Sold Items</span>
          <button className="ranking__button">Visit Store</button>
        </div>
        <div className="ranking__container_fighter2">
          <span className="ranking__number">#2</span>
          <span className="ranking__store">FightClub Store</span>
          <span className="ranking__fighter">Bruce Lee</span>
          <span className="ranking__sold">18.765</span>
          <span className="ranking__sold_items">Sold Items</span>
          <button className="ranking__button">Visit Store</button>
        </div>

        <div className="ranking__container_fighter3">
          <span className="ranking__number">#3</span>
          <span className="ranking__store">FightClub Store</span>
          <span className="ranking__fighter">Keanu Reeves</span>
          <span className="ranking__sold">15.675</span>
          <span className="ranking__sold_items">Sold Items</span>
          <button className="ranking__button">Visit Store</button>
        </div>
      </div>
    </>
  );
}

export default Ranking;
