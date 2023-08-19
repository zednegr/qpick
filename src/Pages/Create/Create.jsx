// Import SASS
import "./create.scss"

// Import React Hooks
import { useState, useRef } from "react"

// Import React Router Dom
import { NavLink } from "react-router-dom"

// Import Axios
import axios from "axios";

function Create() {

    const [img, setImg] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [rating, setRating] = useState('')

    const [loading, setLoading] = useState(false)


    function onSubmit(e) {
        e.preventDefault();

        if (img === '' || name === '' || price === '' || rating === '') {
            console.log('Oxirgacha toldiring!');
        } else {
            setLoading(true);

            axios.post('https://64e080ca50713530432c5e47.mockapi.io/apple-shop/product', {
                img,
                name,
                price,
                rating
            }).then(res => {
                console.log(res);
                setLoading(false);
                setImg('');
                setName('');
                setPrice('');
                setRating('');
            }).catch(error => {
                console.error('Error while making the post request:', error);
                setLoading(false);
            });
        }
    }

    return (
        <section>
            <div className="container">
                <div className="create-start">
                    <h4 className="create-start-h4">Add Products</h4>
                </div>
                <div className="create-wrapper">

                    <div className="input-wrapper">
                        <form>
                            <input type="text" placeholder="Img" value={img} onChange={(e) => setImg(e.target.value)} />
                            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                            <input type="text" placeholder="Rating" value={rating} onChange={(e) => setRating(e.target.value)} />
                            <button className="create-post-btn" type="button" onClick={onSubmit}>Upload</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Create