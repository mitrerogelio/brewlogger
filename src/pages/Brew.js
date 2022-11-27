import ChildPage from "../components/ChildLayout"
import { useLocation } from "react-router-dom"
import { useRef } from "react"

export const Brew = () => {
  // Retrieve brewer obj from <Brewmethods />
  const { state: {data} } = useLocation()

  // Store brewer data as ref
  const ref = useRef({data})
  // console.log(ref)

  // Dropdown Options
  const ratios = ['1:7','1:8','1:9','1:10','1:11','1:12','1:13','1:14','1:15','1:16','1:17','1:18','1:19','1:20']
  const onOptionChangeHandler = (event) => {
    // console.log("User Selected Value - ", event.target.value)
    ref.current.data.multiple = event.target.value.substring(2)
    console.log(`The multiple is now ${ref.current.data.multiple}`)
  }

  // Slider Logic
  const sliderEventHandler = (event) => {
    ref.current.data.dose = event.target.value
    console.log(`The dose is now ${ref.current.data.dose}`)
    return ref.current.data.dose
  }

  return (
    <ChildPage>
      <main className="flex flex-col justify-center align-center p-12">
        <article className="card card-compact w-96 bg-neutral shadow-xl justify-center p-12">
          <div className="avatar flex justify-center m-10 w-3/4">
            <div className="avatar rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={data.img} alt="deez" />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">{data.name}</h2>
            <p>{data.description}</p>
          </div>

          {/* Brew Form */}
          <select className="select select-primary w-full max-w-xs" onChange={onOptionChangeHandler}>
            <option>Brew Ratio:</option>
              {
                ratios.map((ratio, index) => {
                  return <option key={index}>{ratio}</option>
                })
              }
          </select>

          <section className="flex flex-col items-center my-5">
            <label htmlFor="coffee-dose" className="self-start mb-2">Coffee (grams): {ref.current.data.dose}</label>
            <input type="range" id="coffee-dose" min="10" max="50" defaultValue={ref.current.data.dose} className="range" step="5" onChange={sliderEventHandler} />

          </section>
          <section className="flex flex-col items-center  my-5">
            <div className="w-full">
              <p>Water Amount: <span className="text-primary">{ref.current.data.dose * ref.current.data.multiple}</span>(mL/grams)</p>
            </div>
          </section>
        </article>
      </main>
    </ChildPage>
  )
}
