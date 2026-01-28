import '../assets/css/scrolling-images.css'
import boat from '../assets/images/home/boat.png'
import house from '../assets/images/home/house.png'
import man from '../assets/images/home/man.png'
import kada from '../assets/images/home/kada.png'
import diya from '../assets/images/home/diya.png'
import Pookola from '../assets/images/home/Pookola.png'
import TayirKudam from '../assets/images/home/TayirKudam.png'
import Damroo from '../assets/images/home/Damroo.png'
import Chenda from '../assets/images/home/Chenda.png'

const ScrollImageSectionBannerMoving = ({ speed = 50000 }) => {

    const images = [
        boat,
        house,
        man,
        kada,
        diya,
        Pookola,
        TayirKudam,
        Damroo,
        Chenda,
      ].map((image) => ({
        id: crypto.randomUUID(),
        image
      }));

    return (
      <div className="inner">
        <div className="wrapper">
          <section style={{ "--speed": `${speed}ms` }} className='scroll-infinity'>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img src={image} alt={id} />
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }} className='scroll-infinity'>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img src={image} alt={id} />
              </div>
            ))}
          </section>
          <section style={{ "--speed": `${speed}ms` }} className='scroll-infinity'>
            {images.map(({ id, image }) => (
              <div className="image" key={id}>
                <img src={image} alt={id} />
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  };
  
  export { ScrollImageSectionBannerMoving };
  