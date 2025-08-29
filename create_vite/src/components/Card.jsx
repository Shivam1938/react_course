
function Card({hotel,img,detail}) {
    
    
  return (
    <div>
        <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src={img}
          alt={hotel}
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{hotel}</h2>
            <p className="text-gray-400 m-5 p-5 ">
            {detail} {hotel}
            </p>
          </div>
          <button
            type="button"
            className="m-2 flex items-center justify-center w-full p-10 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card