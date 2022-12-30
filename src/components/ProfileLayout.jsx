import ChildPage from '../components/ChildLayout'

export const ProfileLayout = ({children}) => {

  return (
    <ChildPage>
      <section className='hero bg-base-300 h-screen'>
        <div className='hero-content flex-col lg:flex-row'>
          <div className='text-center lg:text-left my-8'>
            <h1 className='text-5xl font-bold'>Set up your account</h1>
          </div>
          {children}
        </div>
      </section>
    </ChildPage>
  )
}
