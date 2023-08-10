import {fetchIBonus} from "./iBonusControllerV3/getBonuses";
import "./BonusPage.css"
import {useEffect, useState} from "react";
import StatusBar from './assets/icons/statusBar.svg'
import Fire from './assets/icons/fire.svg'
import InformButton from './assets/icons/informationButton1.svg'
import Group3112 from './assets/icons/group3112.svg'

const BonusPage = () => {
    
    const [currentQuantity, setCurrentQuantity] = useState<number>(0)
    const [dateBurning, setDateBurning] = useState<string>('')
    const [forBurningQuantity, setForBurningQuantity] = useState<number>(0)
    
    useEffect(()=> {
        Promise.resolve(fetchIBonus())
            .then(res=> { console.log(res)
            
                let currentQuantity: number = res.data.currentQuantity;
                let forBurningQuantity: number = res.data.forBurningQuantity;
                let dateBurning: string = res.data.dateBurning;
                setCurrentQuantity(currentQuantity)
                setForBurningQuantity(forBurningQuantity)
                setDateBurning(dateBurning)
            });
    }, [])
    
    
    const getDate = (date: string): string=> {
        const DateTime = date.split('T')[0].split('-');
        const month = DateTime[1];
        const day = DateTime[2]
        return `${day}.${month}`
    }
    
    let date = getDate(dateBurning)
    
    return (
        <div className='body1'>
            <StatusBar className='statusBar'/>
            <div className='logotype'>
                <p>ЛОГОТИП</p>
            </div>
                <InformButton className='information-button1'/>
            <div className='bonuses'>

                <div className='total'>
                    {currentQuantity} бонусов
                </div>
                <div className='burn_wrapper'>
                    <div className='burn_date'>
                        {`${date}`} сгорит
                    </div>
                        <Fire className='fire'/>
                    <div className='burn_bonus'>
                        {forBurningQuantity} бонусов
                    </div>
                    <Group3112 className='group3112'/>
                </div>
                
            </div>
            <div className='Rectangle765'></div>
        </div>
    );
};

export default BonusPage;
