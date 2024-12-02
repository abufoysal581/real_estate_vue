<template>
  
  <div className="main" data-background-color="dark">
            <div className="section">
                <div className="container">
                    <div className="row mb-5 align-items-center">
                        <div className="col-lg-6 text-center mx-auto">
                        <h2 className="font-weight-bold text-primary heading">
                            Buy Properties
                        </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="container mt-5">
                                <h2>Submit your request to buy</h2>
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
       name: 'Buyform',
       props: {
           msg: String
       }
    }
    </script>