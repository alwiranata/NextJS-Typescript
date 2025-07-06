import { useEffect , useState } from "react"

type User = {
  name : string
  age : number
}

export default function Home() {
  const [user ,setUser] = useState<User | null>(null)
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("api/hello")
      const data = await  res.json()
      setUser(data)
    }
    fetchData()
  } , [])

  return (
    <>
      <div>Name :{user?.name} </div>
      <div>age : {user?.age}</div>
    </>
  )
}
