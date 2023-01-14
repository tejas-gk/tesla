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
      <div className='fixed top-0 left-0 w-full h-16 bg-transparent flex items-center justify-between px-4
      '>
          <div className='flex flex-row items-center gap-4 justify-center mx-auto'>
              {
                  models.map((model) => (
                      <div key={model.id}>
                          <p className='text-black text-md font-semibold'>{model.model}</p>
                      </div>
                    ))
            }  
          </div>
    </div>
  )
}
