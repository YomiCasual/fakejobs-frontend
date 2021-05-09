import {useState} from 'react'

const InputField = ({findFakeJob}) => {
  const [value, setValue] = useState("")
  const formSubmit = (e) => {
    e.preventDefault()

    findFakeJob(value)
    }
    return (
        <form onSubmit={formSubmit}>
          <input type="text"  placeholder="Search by name or address..." className="search-input" value={value}
            onChange={(e) => setValue(e.target.value)}
          />    
          <button className="button search-button">Search &rarr;</button>
        </form>
    )
}

export default InputField
