import React , {useState , useEffect} from 'react';
import "./styles.css";
const ChangeColor = () => {
    const [randomRGB, setRandomRGB] = useState({
        red: 0,
        green: 0,
        blue: 0
    });

    const [manageInterval, setManageInterval] = useState(0);

    const rectangleColor = {
        backgroundColor: `rgb(${randomRGB.red},${randomRGB.green},${randomRGB.blue})`
    }

    let colorPerSecond;

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function changeColor(){
        setRandomRGB({
            red: `${getRandomInt(255)}`,
            green: `${getRandomInt(255)}`,
            blue: `${getRandomInt(255)}`
        })
    }

    function selectRandomRGB(){
        setManageInterval(setInterval(changeColor , 1000));
    }

    function stopColorSelection(){
        clearInterval(manageInterval);
    }

    return (
        <div className='element-container'>
            <h1>Color Generator</h1>
            <h3 style={{textAlign:"center"}}>Doble Click para detener la generación</h3>
            <div 
                className="rectangle"
                style={rectangleColor} 
                onMouseOver={selectRandomRGB}
                onMouseLeave={stopColorSelection}
                onDoubleClick={stopColorSelection}
            >
                
            </div>
            <p className='actual-color' style={{textAlign:"center"}}>
                Color actual <br /> rgb({randomRGB.red},{randomRGB.green},{randomRGB.blue})
            </p>
        </div>
    );
}

export default ChangeColor;
