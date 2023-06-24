import { BsFillImageFill } from "react-icons/bs"
import React,{useEffect} from "react";
/* * Challenge: 
* As soon as the Meme component loads the first time,
* make an API call to "https://api.imgflip.com/get_memes".
* 
* When the data comes in, save just the memes array part
* of that data to the `allMemes` state
* 
* Think about if there are any dependencies that, if they
* changed, you'd want to cause to re-run this function.
 */
export default function Form() {
    let initialMeme = {
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    }

    var [meme, setMeme] = React.useState(initialMeme);
    var [allMeme, setAllMeme] = React.useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMeme(data.data.memes))
    },[]);

    function getMemeImage(e) {
        e.preventDefault();
        let randomNumber = Math.floor(Math.random() * allMeme.length);
        let newMeme = {
            topText: meme.topText,
            bottomText: meme.bottomText,
            randomImage: allMeme[randomNumber].url
        }
        
        setMeme(newMeme);
    }

    function changeHandler(e) {
        let {name,value} = e.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }

    return (
        <main>
            <div className="form">
                <input  onChange={changeHandler} value={meme.topText} name="topText" className="form-input top-input" placeholder="Top Text" />
                <input  onChange={changeHandler} value={meme.bottomText} name="bottomText" className="form-input bottom-input" placeholder="Bottom Text" />
                <button onClick={getMemeImage} className="new-meme-button">
                    Get a new meme image <BsFillImageFill className="image-icon" />
                </button>
            </div>
            <div className="meme-image">
                <img src={meme.randomImage} alt="Wait here"></img>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}