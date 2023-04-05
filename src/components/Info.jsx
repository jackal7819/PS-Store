const Info = ({ title, image, smile, description }) => {
    return (
        <div className='flex flex-col gap-5 items-center m-auto'>
            {image}
            <h3 className='font-bold text-xl'>{title}</h3>
            <div className='flex justify-between items-center '>
                <p className='w-64'>{description}</p>
                {smile}
            </div>
        </div>
    );
};

export default Info;
