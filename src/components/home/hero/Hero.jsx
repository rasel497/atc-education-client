import React from 'react';
import './Hero.css'
import Title from '../../shared/title/Title';

const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className="container">
                    <div className="row">
                        <Title subtitle='WELCOME TO ATC EDUCATION' title='Online Education Management' />
                        <p>Online Education Program, sit amet consectetur adipisicing elit. Nesciunt, molestiae atque dolor veritatis qui quas commodi accusantium assumenda expedita quisquam? Repellat ipsum vero fugiat, ut laudantium inventore quas. Deserunt dignissimos odit voluptatum iste veritatis saepe, consectetur in hic vel quam. Eveniet et deserunt.</p>
                    </div>
                    <div className="button">
                        <button className='primary-btn'>
                            GET STARTED NOW<i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                        <button  >
                            VIEW COURSE<i className='fa fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
                </div>
            </section>
            <div className="margin"></div>
        </>
    );
};
export default Hero;