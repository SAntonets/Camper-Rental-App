import { useState } from 'react';

import css from './ModalAdvert.module.css';
import style from '../Camper/Camper.module.css';
import svgSprite from '../../../public/images/icons.svg';


import  Modal  from '../Modal/Modal';
import Features from '../Features/Features';
import Reviews from '../Reviews/Reviews';
import BookingForm from '../BookingForm/BookingForm';

const ModalAdvert = ({ advert, onModalClose }) => {
  const [btnActive, setBtnActive] = useState('features');

  return (
    <Modal onModalClose={onModalClose}>
      <div className={`${css.modal_window} `}>
        <button
          className={css.modal_close_btn}
          type="button"
          onClick={onModalClose}
        >
          <svg className={css.modal_close_icon} width={32} height={32}>
            <use href={`${svgSprite}#close-btn`}></use>
          </svg>
        </button>

        <div className={css.advert_info}>
          <h2 className={css.advert_name}>{advert.name}</h2>
          <div className={style.advert_subtitle}>
            <div className={style.advert_reviews}>
              <svg width={16} height={16}>
                <use href={`${svgSprite}#star`}></use>
              </svg>
              <p>
                {advert.rating}({advert.reviews.length}
                Reviews)
              </p>
            </div>
            <div className={style.advert_location}>
              <svg width={16} height={16}>
                <use href={`${svgSprite}#map-pin`}></use>
              </svg>
              <p>{advert.location}</p>
            </div>
          </div>
          <div className={css.advert_price}>
            <p>
              &#8364;
              {advert.price.toFixed()}
            </p>
          </div>
        </div>

        <div className={css.scrollbar_container}>
          <div className={css.list_thumb}>
            <div className={css.content_margin_right}>
              <ul className={style.advertItem_gallery}>
                {advert.gallery.map(imgUrl => (
                  <li key={imgUrl}>
                    <img
                      className={style.advertItem_img}
                      src={imgUrl}
                      alt={advert.name}
                      width={290}
                      height={310}
                    />
                  </li>
                ))}
              </ul>
              <p className={`${css.advertItem_descr} text`}>
                {advert.description}
              </p>
              <div className={css.advert_details_btns}>
                <button
                  className={`${css.advert_details_btn} subtitle_h3 ${
                    btnActive === 'features' ? css.row_accent : ''
                  }`}
                  onClick={() => setBtnActive('features')}
                >
                  Features
                </button>
                <button
                  className={`${css.advert_details_btn} subtitle_h3 ${
                    btnActive === 'rewiews' ? css.row_accent : ''
                  }`}
                  onClick={() => setBtnActive('rewiews')}
                >
                  Reviews
                </button>
              </div>
              <div className={css.advert_details_wrapper}>
                <div className={css.advert_details}>
                  {btnActive === 'features' ? (
                    <Features advert={advert} />
                  ) : (
                    <></>
                  )}
                  {btnActive === 'rewiews' ? (
                    <Reviews reviews={advert.reviews} />
                  ) : (
                    <></>
                  )}
                </div>
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalAdvert;
