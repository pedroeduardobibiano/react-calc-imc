import { parse } from 'json5';
import { useState } from 'react';
import { GridItem} from './components/Griditem' 

import styles from './App.module.css'


import poweredImage from './assets/powered.png'
import leftArrowImage from './assets/leftarrow.png'


import {Lvels, levels, calculateImc} from './assets/helpers/imc'


type obj = React.ChangeEvent<HTMLInputElement>;

const App=()=>{
const [heightField, setheigthField] = useState<number>(0);
const [weightField, setweightField] = useState<number>(0);
const [toShow, setToShow] = useState<Lvels | null> (null);

const handleCalculateButton=()=>{
  if(heightField && weightField){
    setToShow(calculateImc(heightField, weightField))
  }else{
    alert("Digite todos os campos.")
  }
}


const peso=(e:obj)=>{
   setheigthField(parseFloat(e.target.value));
}

const handleBackButton =()=>{
  setToShow(null);
  setheigthField(0);
  setweightField(0);
}


  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} width={150}/>
        </div>
      </header>
      <div className={styles.container}>
      <div className={styles.leftside}>
        <h1>Calcule o seu IMC</h1>
        <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa</p>

        <input 
        type="number"
        placeholder="Digite a sua Altura. Ex:1.5(em métros)"
        value={heightField > 0 ? heightField:''}
        onChange={e=> setheigthField(parseFloat(e.target.value))}
        disabled={toShow ? true:false}
         />

<input 
        type="number"
        placeholder="Digite o seu Peso. Ex:75.3 (em Kg)"
        value={weightField > 0 ? weightField:''}
        onChange={e=> setweightField(parseFloat(e.target.value))}
        disabled={toShow ? true:false}
  
         />

         <button  onClick={handleCalculateButton} disabled={toShow ? true:false}>Calcular</button>
      </div>
      <div className={styles.rightside}>
        {!toShow &&
        <div className={styles.grid}>
          {levels.map((item, key)=>(
            <GridItem key={key} item={item}/>
          ))}
        </div>
          }
          {toShow &&
          <div className={styles.rightBig}>
            <div className={styles.rightArrow} onClick={handleBackButton}>
              <img src={leftArrowImage} alt="" width="25" />
            </div>
            <GridItem item={toShow}/>
          </div>
          }
      </div>
      </div>
      </div>
  )
}

export default App;