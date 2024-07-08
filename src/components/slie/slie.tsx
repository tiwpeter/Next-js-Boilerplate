import React from 'react';
import './slecss/buttonsle.css';
import './slecss/slie.css';
import './slecss/sliemoust.css';



function SlieData() {
  const data = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Doe', age: 28 }
  ];
  /*
   <div>
      <h2>Data List</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name} - Age: {item.age}
          </li>
        ))}
      </ul>
    </div>
  */

    return (
    <div style={{ width: '1100px', marginLeft: '249px' }} id="antasin">
      {/* <h3>Highlight</h3> */}
      <div className="mt-3" style={{ background: '#7f99ff', display: 'flex', minHeight: '43px', padding: '12px 16px', position: 'relative', whiteSpace: 'normal', width: '1102px' }}>
        <h3>Highlight</h3>
      </div>

      {/* Placeholder for additional content */}

      <div className="antasin">
        <div style={{ backgroundImage: 'linear-gradient(to left, rgb(255 255 255 / 0), white var(--linaria-theme_spacing-macro40px))' }}>
          <i id="left" className="fa-solid fa-angle-left"></i>
        </div>

        <div className="fle">
          <div className="lo">
            <div>
              <img src="icon/PantipLogo.png" alt="" style={{ width: '229px', height: '172px', borderRadius: '16px' }} />
            </div>
            <div className="s" style={{ width: '170px', height: '65px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <h5 style={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                ที่ต้องพกติดกระเป๋า! 🌧️💧☂️
              </h5>
            </div>
          </div>
          <div className="lo">
            <div>
              <img src="icon/PantipLogo.png" alt="" style={{ width: '229px', height: '172px', borderRadius: '16px' }} />
            </div>
            <div className="s" style={{ width: '170px', height: '65px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <h5 style={{ maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                [Pantip Point] น้องเพี้ยนชวนแชร์ภาพไอเทมรับหน้าฝน ที่ต้องพกติดกระเป๋า! 🌧️💧☂️
              </h5>
            </div>
          </div>
        </div>

        <i id="right" className="fa-solid fa-angle-right"></i>
      </div>

      {/* Placeholder for additional content */}
    </div>
  );

}

export default SlieData;