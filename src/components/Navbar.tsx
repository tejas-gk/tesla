import logo from '/assets/assets/asset 7.svg';

const models = [
    {
        id: 1,
        model:'Model S',
    },
    {
        id: 2,
        model: 'Model 3',
    },
    {
        id: 3,
        model: 'Model X',
    },
    {
        id: 4,
        model: 'Model Y',
    },
    {
        id: 5,
        model: 'Solar Roof',
    },
    {
        id: 6,
        model: 'Solar Panels',
    },
]

export default function Navbar() {
  return (
      <div className='fixed top-0 left-0 w-full h-16 bg-transparent flex items-center justify-between px-4 z-10 mt-10
      '>
          <span className='left text-white text-2xl font-semibold'>
                <img src='/assets/assets/asset 12.svg' alt="logo" className='h-24 w-24'/>
          </span>
          <div className='center flex flex-row items-center gap-10 justify-center mx-auto'>
              {
                  models.map((model) => (
                      <div key={model.id}>
                          <p className='text-black text-md font-semibold'>{model.model}</p>
                      </div>
                    ))
            }  
          </div>

          <div className='right flex flex-row items-center gap-6'>
              <p className='text-black text-md font-semibold'>Shop</p>
              <p className='text-black text-md font-semibold'>Account</p>
                <button className='px-4 py-2 rounded-md'>Menu</button>
          </div>
    </div>
  )
}
