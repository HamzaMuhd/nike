const Button = ({label, iconUrl, backgroundColor, borderColor, textColor}) => {
  return (
   <button className={`flex justify-center items-center gap-2 px-7 
   py-4 border font-montserrat text-lg leading-none
   ${backgroundColor ? `${backgroundColor} ${textColor}
   ${borderColor}` 
  :  'bg-coral-red text-white border-coral-red'
  } rounded-full`}>
    {label}
    {iconUrl && 
    <img src={iconUrl} alt='arrowRight'
    className="h-5 w-5 ml-2 rounded-full bg-white"
    />
    }
   </button>
  )
}

export default Button