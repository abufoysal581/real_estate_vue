<template>
  
  <div class="section">
      <div class="container">
        <div class="row mb-5 align-items-center">
          <div class="col-lg-6">
            <h2 class="font-weight-bold text-primary heading">
              Popular Properties
            </h2>
          </div>
          <div class="col-lg-6 text-lg-end">
            <p>
              <a
                href="#"
                target="_blank"
                class="btn btn-primary text-white py-3 px-4"
                >View all properties</a
              >
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="property-slider-wrap">
              <div class="row">
                <div class="col-sm-4" v-for="data in datas" :key="data.id">
                  <a href="property-single.html" class="img">
                    <img :src="'http://127.0.0.1:8000/addproperty/'+data.image" alt="Image" class="img-fluid" style="height: 300px; width: 400px;" />
                  </a>

                  <div class="property-content">
                    <div class="price mb-2 text-black" style="font-size: xx-large;"><span>BDT {{ data.price }}</span></div>
                    <div>
                      <span class="d-block mb-2 text-black" style="font-size: xx-large;"
                        >{{ data.property_title }}</span
                      >
                      <span class="city d-block mb-3 text-black" style="font-size: large;">{{ data.location }}</span>

                      <div class="specs d-flex mb-4">
                        <span class="d-block d-flex align-items-center me-3">
                          <span class="icon-bed me-2"></span>
                          <span class="caption text-black" style="font-size: large;">{{ data.bedrooms }} beds</span>
                        </span>
                        <span class="d-block d-flex align-items-center">
                          <span class="icon-bath me-2"></span>
                          <span class="caption text-black" style="font-size: large;">{{ data.bathrooms }} baths</span>
                        </span>
                      </div>

                          <div className="row">
                            <div className="col-md-6">
                              <a  className="btn btn-primary py-2 px-3" > See details </a>
                            </div> 
                            <div className="col-md-6">
                              <a href="/Buyform" className="btn btn-primary py-2 px-3" > Buy Property </a>
                            </div> 
                          </div>
                    </div>
                  </div>
                </div>
                <!-- .item -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </template>
    <script>
    import DataService from "../services/DataService";
    
    export default {
      name: 'Buyproperty',
      data() {
        return {
          datas:[]
        };
      },
      methods: {
        getProperty() {
          DataService.propertyList('sale')
            .then(response => {
              if(response.data.data)
                this.datas= response.data.data;
              else
                alert(response.data.error)
            })
            .catch(e => {
              console.log(e);
          });
        }
      }, mounted() {
        this.getProperty();
      }
    }
</script>