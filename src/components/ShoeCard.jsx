const ShoeCard = ({imgUrl, changeBigShoeImage, bigShoeImg}) => {
    
    const handleClick = () => {
        if(bigShoeImg !== imgUrl.bigShoe) {
            changeBigShoeImage(imgUrl.bigShoe)
        }
    }
  
    return (
    <div>
        <div className={`border-2 
        rounded-xl
        ${bigShoeImg === imgUrl.bigShoe ? 'border-coral-red': 'border-transparent'}
        cusror-pointer max-sm:flex-1
        `}
        onClick={handleClick}
        >
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4 rounded-xl">
                <img 
                src={imgUrl.thumbnail}
                alt="shoe collection"
                width={127}
                height={103}
                className="object-contain"
                />
            </div>

        </div>
    </div>
  )
}

export default ShoeCard