import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'

export const Carosel = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full h-[550px] ">
                    <img src={img1} className="w-full rounded-lg h-[550px]" />

                    <div className="absolute flex  items-center  justify-between h-[550px] w-full bg-gradient-to-r from-[#151515] to-blue-[rgba(21, 21, 21, 0)] rounded-lg">
                        <div className='w-[300px] ml-[50px] space-y-3  text-white items-center'>
                            <h2 className='text-5xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div >
                                <button className="btn btn-outline btn-warning mr-5">Discover More</button>
                                <button className="btn btn-outline btn-error">Latest Project</button>
                            </div>
                        </div>

                        <div className='absolute bottom-8 right-6'>
                            <a href="#slide4" className="btn btn-circle mr-6">❮</a>
                            <a href="#slide2" className="btn btn-circle mr-6">❯</a>
                        </div>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full h-[550px] ">
                    <img src={img2} className="w-full rounded-lg h-[550px]" />
                    <div className="absolute flex  items-center  justify-between h-[550px] w-full bg-gradient-to-r from-[#151515] to-blue-[rgba(21, 21, 21, 0)] rounded-lg">
                        <div className='w-[300px] ml-[50px] space-y-3  text-white items-center'>
                            <h2 className='text-5xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div >
                                <button className="btn btn-outline btn-warning mr-5">Discover More</button>
                                <button className="btn btn-outline btn-error">Latest Project</button>
                            </div>
                        </div>

                        <div className='absolute bottom-8 right-6'>
                            <a href="#slide1" className="btn btn-circle mr-6">❮</a>
                            <a href="#slide3" className="btn btn-circle mr-6">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[550px] ">
                    <img src={img3} className="w-full rounded-lg h-[550px]" />

                    <div className="absolute flex  items-center  justify-between h-[550px] w-full bg-gradient-to-r from-[#151515] to-blue-[rgba(21, 21, 21, 0)] rounded-lg">
                        <div className='w-[300px] ml-[50px] space-y-3  text-white items-center'>
                            <h2 className='text-5xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div >
                                <button className="btn btn-outline btn-warning mr-5">Discover More</button>
                                <button className="btn btn-outline btn-error">Latest Project</button>
                            </div>
                        </div>

                        <div className='absolute bottom-8 right-6'>
                            <a href="#slide2" className="btn btn-circle mr-6">❮</a>
                            <a href="#slide4" className="btn btn-circle mr-6">❯</a>
                        </div>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full h-[550px] ">
                    <img src={img4} className="w-full rounded-lg h-[550px]" />
                    <div className="absolute flex  items-center  justify-between h-[550px] w-full bg-gradient-to-r from-[#151515] to-blue-[rgba(21, 21, 21, 0)] rounded-lg">
                        <div className='w-[300px] ml-[50px] space-y-3  text-white items-center'>
                            <h2 className='text-5xl font-bold'>Affordable Price For Car Servicing</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div >
                                <button className="btn btn-outline btn-warning mr-5">Discover More</button>
                                <button className="btn btn-outline btn-error">Latest Project</button>
                            </div>
                        </div>

                        <div className='absolute bottom-8 right-6'>
                            <a href="#slide3" className="btn btn-circle mr-6">❮</a>
                            <a href="#slide1" className="btn btn-circle mr-6">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
