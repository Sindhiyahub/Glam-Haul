

import React, { useState, useEffect } from 'react';
import { db, storage } from '../../../src/firebase';
import { collection, addDoc, query, where, getDocs } from "firebase/firestore/lite";
import "./AddProducts.css";

export const AddProducts = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [colour, setColour] = useState('');
    const [fabric, setFabric] = useState('');
    const [price, setPrice] = useState('');
    // const [size, setSize] = useState('');
    const [shop, setShop] = useState('');
    const [image, setImage] = useState(null);
    const [category, setCategory] = useState('');
    const [imageError, setImageError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [uploadError, setUploadError] = useState('');
    const [products, setProducts] = useState([]);

    const types = ['image/jpg', 'image/jpeg', 'image/png', 'image/PNG', 'image/webp', 'image/WEBP', 'image/avif', 'image/AVIF'];

    useEffect(() => {
        // Fetch products based on the selected category
        const fetchProducts = async () => {
            try {
                const q = query(collection(db, "Products"), where("category", "==", category));
                const querySnapshot = await getDocs(q);
                const productsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProducts(productsData);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, [category]);

    const handleProductImg = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && types.includes(selectedFile.type)) {
                setImage(selectedFile);
                setImageError('');
            } else {
                setImage(null);
                setImageError('please select a valid image file type (png or jpg or webp or avif)');
            }
        } else {
            console.log('please select your file');
        }
    };

    const handleAddProducts = (e) => {
        e.preventDefault();
        const uploadTask = storage.ref(`product-images/${image.name}`).put(image);

        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(progress);
        }, error => setUploadError(error.message), async () => {
            storage.ref('product-images').child(image.name).getDownloadURL().then(async url => {
                try {
                    await addDoc(collection(db, "Products"), {
                        title,
                        description,
                        colour,
                        fabric,
                        // size,
                        shop,
                        price: Number(price),
                        url,
                        category
                    });
                    setSuccessMsg('Product added successfully');
                    setTitle('');
                    setDescription('');
                    setColour('');
                    setFabric('');
                    setPrice('');
                    // setSize('');
                    setShop('');
                    setCategory('');
                    document.getElementById('file').value = '';
                    setImageError('');
                    setUploadError('');
                    setTimeout(() => {
                        setSuccessMsg('');
                    }, 3000);
                } catch (error) {
                    setUploadError(error.message);
                }
            });
        });
    };

    return (
        <div className='container'>
            <br />
            <br />
            <h1>Add Products</h1>
            <br />
            <hr />
            {successMsg && <>
                <div className='success-msg'>{successMsg}</div>
                <br />
            </>}
            <form autoComplete="off" className='form-group' onSubmit={handleAddProducts}>

                <input type="text" className='form-control' required
                    onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Product Title'></input>
                <br />

                <input type="text" className='form-control' required
                    onChange={(e) => setDescription(e.target.value)} value={description} placeholder='Product Description'></input>
                <br />

                <input type="text" className='form-control' required
                    onChange={(e) => setColour(e.target.value)} value={colour} placeholder='Colour'></input>
                <br />

                <input type="text" className='form-control' required
                    onChange={(e) => setFabric(e.target.value)} value={fabric} placeholder='Fabric Type'></input>
                <br />

                {/* // <select className='form-control' value={size} onChange={(e) => setSize(e.target.value)} required>
                //     <option value="">Select Size</option>
                //     <option value="Small">Small</option>
                //     <option value="Medium">Medium</option>
                //     <option value="Large">Large</option>
                //     <option value="All size">All size</option>
                // </select>
                // <br /> */}

                <select className='form-control' value={shop} onChange={(e) => setShop(e.target.value)} required>
                    <option value="">Select Shop</option>
                    <option value="Pothys">Pothys</option>
                    <option value="Chennai Silks">Chennai Silks</option>
                    <option value="KV.Tex">KV.Tex</option>
                    <option value="Max Fashion">Max Fashion</option>
                    <option value="Louis Phillipe">Louis Phillipe</option>
                    <option value="Otto">Otto</option>
                    <option value="Arvind">Arvind</option>
                    <option value="Raymond">Raymond</option>
                    <option value="Soch">Soch</option>
                    <option value="Aurelia">Aurelia</option>
                    <option value="W">W</option>
                    <option value="Biba">Biba</option>
                </select>
                <br />

                <input type="number" className='form-control' required
                    onChange={(e) => setPrice(e.target.value)} value={price} placeholder='Product Price'></input>
                <br />

                <select className='form-control' value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="">Select Category</option>
                    <option value="Men">Men</option>
                    <option value="Women">Women</option>
                    <option value="Kids">Kids</option>
                </select>

                <input type="file" id="file" className='form-control' required
                    onChange={handleProductImg} placeholder='Upload Product Image'></input>

                {imageError && <>
                    <br />
                    <div className='error-msg'>{imageError}</div>

                </>}
                <br />
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="submit" className='btn btn-success btn-md'>
                        SUBMIT
                    </button>
                </div>
            </form>
            {uploadError && <>
                <br />
                <div className='error-msg'>{uploadError}</div>

            </>}

            {/* Display products */}
            <div className="product-list">
                {products.map(product => (
                    <div key={product.id} className="product">
                        <img src={product.url} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <p>{product.colour}</p>
                        <p>{product.fabric}</p>
                        {/* <p>{product.size}</p> */}
                        <p>{product.shop}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AddProducts;

