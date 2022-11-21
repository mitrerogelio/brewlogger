import ChildPage from "../components/ChildLayout"
import { useParams } from "react-router-dom"

export const Brew = (props) => {
  // const {brewer} = useParams()

  return (
    <ChildPage>
      <main className="flex flex-col justify-center align-center p-12">
        <article className="card card-compact w-96 bg-neutral shadow-xl justify-center p-12">
          <div className="avatar flex justify-center m-10 w-3/4">
            <div className="avatar rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src="" alt="deez" />
            </div>
          </div>
          <div className="card-body">
            <h2 className="card-title">{props.exampleprop}</h2>
            <p>Easy to brew and super consistent, the French Press is very reliable. Its classic and well-engineered design hasn’t changed much since its invention in 1929, and it’s perfect for making multiple cups of heavy-bodied coffee in 4 minutes. Learn how to use the French Press to brew incredible-tasting coffee below.</p>
          </div>
          <section className="flex flex-col items-center my-5">
            <label htmlFor="coffee-dose" className="self-start mb-2">Coffee (grams): 50</label>
            <input type="range" id="coffee-dose" min="0" max="100" defaultValue='10' className="range" step="10" />
            <div className="w-full flex justify-between text-xs px-2 pointer-cursor">
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
            </div>
          </section>
          <section className="flex flex-col items-center  my-5">
            <div className="w-full">
              <label htmlFor="water-dose" className="self-start mb-2">Water (mL/grams)</label>
              <input id="water-dose" type="range" min="0" max="100" defaultValue="40" className="range" />
            </div>
          </section>
          <select className="select select-primary w-full max-w-xs">
            <option>Brew Ratio</option>
            <option>1:5</option>
            <option>1:6</option>
            <option>1:7</option>
            <option>1:8</option>
            <option>1:9</option>
            <option>1:10</option>
            <option>1:11</option>
            <option>1:12</option>
            <option>1:13</option>
            <option>1:14</option>
            <option>1:15</option>
            <option>1:16</option>
            <option>1:17</option>
            <option>1:18</option>
            <option>1:19</option>
            <option>1:20</option>
          </select>
        </article>
      </main>
    </ChildPage>
  )
}
