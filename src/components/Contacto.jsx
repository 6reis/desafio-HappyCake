import React from 'react'

const Contacto = () => {
  return (
    <div className='d-flex flex-column justify-content-center text-center w-100 my-5'>
      <div>
        <h1>Cuentanos <strong>¿En que te podemos ayudar?</strong></h1>
      </div>
      <div>
        <div class="mb-3 ">
          <label for="exampleFormControlInput1" class="form-label">Email address:</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Description</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
        </div>
      </div>
      <div>
        <button type="button" class="btn btn-danger">Submit</button>
      </div>
    </div>
  )
}

export default Contacto