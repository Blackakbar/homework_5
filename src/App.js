// import React from "react";

// import { useState } from "react";

// export default function Form() {
//   const [form, setForm] = useState({
//     firstName: "Barbara",
//     lastName: "Straysi",
//     email: "barbara1960@gmail.com"
//   })

//   return(
//     <>
//       <label>
//         First Name:
//         <input 
//         value={form.firstName} 
//         onChange={e => {
//           setForm({
//             ...form,
//             firstName: e.target.value
//           })
//         }}
//         >
//         </input>
//       </label>

//       <label>
//         Last Name:
//         <input 
//         value={form.lastName} 
//         onChange={e => {
//           setForm({
//             ...form,
//             lastName: e.target.value
//           })
//         }}
//         >
//         </input>
//       </label>

//       <label>
//         email:
//         <input 
//         value={form.email} 
//         onChange={e => {
//           setForm({
//             ...form,
//             email: e.target.value
//           })
//         }}
//         >
//         </input>
//       </label>

//       <p>
//         {form.firstName}{" "}
//         {form.lastName}{" "}
//         ({form.email})
//       </p>
//     </>
//   )
// }
import React from "react";
import { useState } from "react";

export default function Form(){
  const [form, setForm] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@react.com",
    fact: "love cats"
  })

  const containerDiv = {
    margin: '0 auto',
    padding: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh'
  }

  const formContainer = {
    margin: "0",
    padding: "0",
    width: "250px",
    height: "290px",
    display: "flex",
    flexDirection: "column",
    border: "2px solid #E85A4F",
    borderRadius: '5px',
    gap: "3px",
  }

  const labelStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#E98074'
  }

  const inputStyle = {
    display: 'flex',
    color: '#321124',
    backgroundColor: '#D8C3A5',
    border: '2px solid #E85A4F',
    alignSelf: 'center'
  }

  const underInput = {
    margin: '0',
    color: 'black',
    textAlign: 'center'
  }

  return(
    <>
      <div style={containerDiv}>
        <div style={formContainer}>
          <label style={labelStyle}>
            First Name:
            <input style={inputStyle} value={form.firstName} onChange={e => {
              setForm({
                ...form,
                firstName: e.target.value
              })
            }}
            />
          </label>
          <p style={underInput}>{form.firstName}</p>


          <label style={labelStyle}>
            Last Name:
            <input style={inputStyle} value={form.lastName} onChange={e => {
              setForm({
                ...form,
                lastName: e.target.value
              })
            }}
            />
          </label>
          <p style={underInput}>{form.lastName}</p>

          <label style={labelStyle}>
            Email:
            <input style={inputStyle} value={form.email} onChange={e => {
              setForm({
                ...form,
                email: e.target.value
              })
            }}
            />
          </label>
          <p style={underInput}>{form.email}</p>

          <label style={labelStyle}>
            Fact:
            <input style={inputStyle} value={form.fact} onChange={e => {
              setForm({
                ...form,
                fact: e.target.value
              })
            }}
            />
          </label>
          <p style={underInput}>{form.fact}</p>

        </div>
      </div>
    </>
  )
}