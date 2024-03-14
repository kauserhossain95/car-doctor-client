import parts from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'

export const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} className=" rounded-lg shadow-2xl w-2/3" />
                    <img src={parts} className=" rounded-lg shadow-2xl w-1/2 absolute right-0 top-1/2 border-8 border-white rounded-lg" />
                </div>
                <div className=" w-1/2 space-y-4">
                    <h5 className="text-sm font-bold text-red-400">About Us</h5>
                    <h2 className="text-3xl font-bold">We are qualified & of experience in this field</h2>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    )
}
