import style from './styles.module.scss';
import Storeroom from '../../../IMAGE/ImgStoreroom.png';



const CardStoreroom = (props) => {

    const {ObjectSpecificantions} = props;

    return (
        <>
            <div className={style.box_card_product}>
                <div className={style.box_card_product__card_product}>
                    <img src={Storeroom} alt="Storeroom" />
                    <div className={style.card_product__info_storeroom}>
                        <div className={style.info_storeroom__one_box}>
                            <h3>Кладовка {ObjectSpecificantions.numberStoreroom} <span>от {ObjectSpecificantions.price} Р/мес.</span></h3>
                            <h4>{ObjectSpecificantions.typeLock}</h4>
                        </div>
                        <div className={style.info_storeroom__two_box}>
                            <div className={style.two_box__characteristic}>
                                <p>Площадь</p>
                                <p>{ObjectSpecificantions.square}</p>
                            </div>
                            <div className={style.two_box__characteristic}>
                                <p>Объём</p>
                                <p>{ObjectSpecificantions.volume}</p>
                            </div>
                            <div className={style.two_box__characteristic}>
                                <p>Размер кладовки {'(ДхШхВ)'}</p>
                                <p>{ObjectSpecificantions.size}</p>
                            </div>
                            <div className={style.two_box__characteristic}>
                                <p>Максимальная нагрузка</p>
                                <p>{ObjectSpecificantions.maxLoad}</p>
                            </div>
                            <div className={style.two_box__characteristic}>
                                <p>Расположение</p>
                                <p>{ObjectSpecificantions.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



export default CardStoreroom