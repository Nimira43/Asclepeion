import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import header2 from './header2.png'
import group_profiles from './group_profiles.png'
import profile from './profile.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'

export const assets = {
  appointment_img,
  header_img,
  header2,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo
}

export const specialityData = [
  {
    speciality: 'General physician',
    image: General_physician
  },
  {
    speciality: 'Gynecologist',
    image: Gynecologist
  },
  {
    speciality: 'Dermatologist',
    image: Dermatologist
  },
  {
    speciality: 'Pediatricians',
    image: Pediatricians
  },
  {
    speciality: 'Neurologist',
    image: Neurologist
  },
  {
    speciality: 'Gastroenterologist',
    image: Gastroenterologist
  },
]

export const doctors = [
  
  {
    _id: "doc1",
    name: "Dr. Emma Johnson",
    image: doc1,
    speciality: "General Physician",
    degree: "MBBS, MD",
    experience: "10 years",
    about: "Dr. Emma Johnson is a highly experienced General Physician dedicated to providing exceptional healthcare services to her patients.",
    fees: "£100",
    address: {
      line1: "123 London Street",
      line2: "London, UK"
    }
  },
  {
    _id: "doc2",
    name: "Dr. Olivia Brown",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS, MS (Obstetrics and Gynecology)",
    experience: "8 years",
    about: "Dr. Olivia Brown specialises in women's reproductive health and is committed to offering compassionate care.",
    fees: "£120",
    address: {
      line1: "456 London Road",
      line2: "London, UK"
    }
  },
  {
    _id: "doc3",
    name: "Dr. Ava Williams",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS, MD (Dermatology)",
    experience: "12 years",
    about: "Dr. Ava Williams is an expert in skin health and provides comprehensive dermatological care.",
    fees: "£110",
    address: {
      line1: "789 London Avenue",
      line2: "London, UK"
    }
  },
  {
    _id: "doc4",
    name: "Dr. Sophia Jones",
    image: doc4,
    speciality: "Pediatrician",
    degree: "MBBS, MD (Pediatrics)",
    experience: "7 years",
    about: "Dr. Sophia Jones is a dedicated Pediatrician who focuses on the health and well-being of children.",
    fees: "£90",
    address: {
      line1: "1010 London Square",
      line2: "London, UK"
    }
  },
  {
    _id: "doc5",
    name: "Dr. Mia Taylor",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS, MD (Neurology)",
    experience: "15 years",
    about: "Dr. Mia Taylor is a skilled Neurologist with extensive experience in treating neurological disorders.",
    fees: "£150",
    address: {
      line1: "1111 London Park",
      line2: "London, UK"
    }
  },
  {
    _id: "doc6",
    name: "Dr. Isabella Martin",
    image: doc6,
    speciality: "Gastroenterologist",
    degree: "MBBS, MD (Gastroenterology)",
    experience: "9 years",
    about: "Dr. Isabella Martin provides expert care for gastrointestinal issues and digestive health.",
    fees: "£130",
    address: {
      line1: "1212 London Lane",
      line2: "London, UK"
    }
  },
  {
    _id: "doc7",
    name: "Dr. James Wilson",
    image: doc7,
    speciality: "General Physician",
    degree: "MBBS, MD",
    experience: "14 years",
    about: "Dr. James Wilson is committed to offering high-quality general medical care to all his patients.",
    fees: "£100",
    address: {
      line1: "1313 London Crescent",
      line2: "London, UK"
    }
  },
  {
    _id: "doc8",
    name: "Dr. Jack Moore",
    image: doc8,
    speciality: "Gynecologist",
    degree: "MBBS, MS (Obstetrics and Gynecology)",
    experience: "11 years",
    about: "Dr. Jack Moore specialises in women's reproductive health and ensures his patients receive the best care.",
    fees: "£120",
    address: {
      line1: "1414 London Way",
      line2: "London, UK"
    }
  },
  {
    _id: "doc9",
    name: "Dr. Henry Taylor",
    image: doc9,
    speciality: "Dermatologist",
    degree: "MBBS, MD (Dermatology)",
    experience: "13 years",
    about: "Dr. Henry Taylor is a renowned Dermatologist focusing on skin health and cosmetic dermatology.",
    fees: "£110",
    address: {
      line1: "1515 London Bridge",
      line2: "London, UK"
    }
  },
  {
    _id: "doc10",
    name: "Dr. George Anderson",
    image: doc10,
    speciality: "Pediatrician",
    degree: "MBBS, MD (Pediatrics)",
    experience: "10 years",
    about: "Dr. George Anderson is a dedicated Pediatrician offering comprehensive care to children of all ages.",
    fees: "£90",
    address: {
      line1: "1616 London Court",
      line2: "London, UK"
    }
  },
  {
    _id: "doc11",
    name: "Dr. William Harris",
    image: doc11,
    speciality: "Neurologist",
    degree: "MBBS, MD (Neurology)",
    experience: "12 years",
    about: "Dr. William Harris is a dedicated Neurologist known for his expertise in treating a variety of neurological conditions.",
    fees: "£150",
    address: {
      line1: "1717 London Walk",
      line2: "London, UK"
    }
  },
  {
    _id: "doc12",
    name: "Dr. Alexander Scott",
    image: doc12,
    speciality: "Gastroenterologist",
    degree: "MBBS, MD (Gastroenterology)",
    experience: "14 years",
    about: "Dr. Alexander Scott is a skilled Gastroenterologist with a focus on digestive health and related disorders.",
    fees: "£130",
    address: {
      line1: "1818 London Street",
      line2: "London, UK"
    }
  },
  {
    _id: "doc13",
    name: "Dr. Lucas Cooper",
    image: doc13,
    speciality: "General Physician",
    degree: "MBBS, MD",
    experience: "11 years",
    about: "Dr. Lucas Cooper offers exceptional general medical services with a patient-centered approach.",
    fees: "£100",
    address: {
      line1: "1919 London Road",
      line2: "London, UK"
    }
  },
  {
    _id: "doc14",
    name: "Dr. Daniel Turner",
    image: doc14,
    speciality: "Gynecologist",
    degree: "MBBS, MS (Obstetrics and Gynecology)",
    experience: "13 years",
    about: "Dr. Daniel Turner is a compassionate Gynecologist dedicated to women's health and well-being.",
    fees: "£120",
    address: {
      line1: "2020 London Avenue",
      line2: "London, UK"
    }
  },
  {
    _id: "doc15",
    name: "Dr. David Lewis",
    image: doc15,
    speciality: "Dermatologist",
    degree: "MBBS, MD (Dermatology)",
    experience: "10 years",
    about: "Dr. David Lewis is a highly regarded Dermatologist specialising in skin care and treatment of various skin conditions.",
    fees: "£110",
    address: {
      line1: "2121 London Boulevard",
      line2: "London, UK"
    }
  }
] 






