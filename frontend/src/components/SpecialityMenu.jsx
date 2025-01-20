import { Link } from 'react-router-dom'
import { specialityData } from '../assets/assets'

const SpecialityMenu = () => {
  return (
    <div 
      id='speciality'
      className='flex flex-col items-center gap-4 py-16 text-dark bg-lighter-blue mt-5 rounded-lg'
    >
      <h1 
        className='text-3xl text-secondary font-'
      >
        Search for a Specialist</h1>
      <p 
        className='sm:w-1/3 text-center text-dark text-sm'
      >
        We offer specialist help across multiple fields of healthcare. Click on the icons below to find out more:
      </p>
      <div 
        className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll '
      >
        {specialityData.map((item, index) => (
          <Link
            className='flex flex-col items-center text-xs text-dark cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' 
            key={index}
            to={`/doctors/${item.speciality}`}
          >
            <img
              className='w-16 sm:w-24 mb-2' 
              src={item.image} 
              alt='Specialist Field' 
            />
            <p>
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
