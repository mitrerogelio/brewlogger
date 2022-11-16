import ChildPage from "../components/ChildLayout"
import { useParams } from "react-router-dom"

export const Brew = () => {
  let {brewer} = useParams()

  return (
    <ChildPage>
      <p>This is a {brewer} brew page</p>
    </ChildPage>
  )
}
