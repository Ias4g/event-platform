import { gql, useQuery } from "@apollo/client"

const GET_LESSONS_QUERY = gql`
  query{
    lessons{
      id
      <title></title>
    }
  }
`

function App() {
  const { data } = useQuery(GET_LESSONS_QUERY)

  console.log(data)

  return (
    <h1 className="text-3xl">
      Hello Iza
    </h1>
  )
}

export default App
