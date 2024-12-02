<template>
  
  <div className="main" data-background-color="dark">
            <div className="section">
                <div className="container">
                    <div className="row mb-5 align-items-center">
                        <div className="col-lg-6 text-center mx-auto">
                        <h2 className="font-weight-bold text-primary heading">
                            Rent
                             Properties
                        </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="container mt-5">
                                <h2>Submit your request to rent</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label for="name" className="form-label">Full Name</label>
                                        <input type="text" className="form-control" id="name" defaultValue={inputs.client_name} name="client_name" onChange={handleChange}  required/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email Address</label>
                                        <input type="text" className="form-control" id="email" defaultValue={inputs.email} name="email" onChange={handleChange}  required/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="phone" className="form-label">Phone Number</label>
                                        <input type="text" className="form-control" id="phone" defaultValue={inputs.phone} name="phone" onChange={handleChange}  required/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="rent_from" className="form-label">Rent from</label>
                                        <input type="date" className="form-control" id="rent_from" defaultValue={inputs.rent_from} name="rent_from" onChange={handleChange}  required/>
                                    </div>
                                    <div className="mb-3">
                                        <label for="rent_to" className="form-label">Rent to</label>
                                        <input type="date" className="form-control" id="rent_to" defaultValue={inputs.rent_to} name="rent_to" onChange={handleChange}  required/>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit Request</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </template>
    
    <script>
    export default {
       name: 'Rentform',
       props: {
           msg: String
       }
    }
    </script>