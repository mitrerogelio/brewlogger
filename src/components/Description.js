
const Description = ({brewer}) => {
    return (
        <>
            <div className='avatar flex justify-center m-10 w-3/4'>
                <div className='avatar rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                    <img
                        src={brewer.img}
                        alt={`Closeup of ${brewer.name} brewer`}
                    />
                </div>
            </div>
            <div className='card-body'>
                <h2 className='card-title'>{brewer.name}</h2>
                <p>{brewer.description}</p>
            </div>
        </>
  )
}

export default Description