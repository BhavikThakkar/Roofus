<template>
  <div class="container-box q-mx-auto margin-t-44 maintenance-request">
    <h5 class="f-18 main-color q-mt-none q-mb-none text-left fw-600">MAINTENANCE REQUESTS</h5>
      <!-- <q-card class="my-card q-mt-none active-card">
        <q-card-section class="card-p-15">
          <div class="main-section">
            <div class="main-wrapper flex items-center">
              <div class="maintenance-first maintenance-box flex items-center">
                <div class="maintenance-img margin-r-30">
                  <img src="/src/assets/maintenance-img.png" />
                </div>
                <div class="flex category">
                  <div class="maintenance-Category category-title">
                    <h6 class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-600">Category</h6>
                    <h6 class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-400">Interior</h6>
                  </div>
                  <div class="maintenance-subcategory category-title">
                    <h6 class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-600">Sub-category</h6>
                    <h6 class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-400">Roof</h6>
                  </div>
                </div>
              </div>
              <div class="maintenance-second maintenance-box">
                <h6 class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-600">
                    Description
                  </h6>
                  <h6
                    class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-400"
                  >
                    A description of the request comes...
                  </h6>
                </div>
                <div class="maintenance-third flex maintenance-box">
                  <div class="maintenance-status margin-r-70 category-title">
                    <h6
                      class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-600"
                    >
                      Status
                    </h6>
                    <h6
                      class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-400 q-pl-sm status-sign p-relative"
                    >
                      In progress
                    </h6>
                  </div>
                  <div class="maintenance-date category-title">
                    <h6
                      class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-600"
                    >
                      Date
                    </h6>
                    <h6
                      class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-400"
                    >
                      10 / 11 / 2021
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card> -->
        <!-- <q-card class="maintenance-card q-mt-none">
          <q-card-section class="card-p-15">
            <div class="main-section">
              <div class="main-wrapper flex items-center">
                <div class="maintenance-first maintenance-box flex items-center">
                  <div class="maintenance-img margin-r-30">
                    <img src="/src/assets/maintenance-img.png" />
                  </div>
                  <div class="flex category">
                    <div class="maintenance-Category category-title">
                      <h6
                        class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-600"
                      >
                        Category
                      </h6>
                      <h6
                        class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-400"
                      >
                        Interior
                      </h6>
                    </div>
                    <div class="maintenance-subcategory category-title">
                      <h6
                        class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-600"
                      >
                        Sub-category
                      </h6>
                      <h6
                        class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-400"
                      >
                        Roof
                      </h6>
                    </div>
                  </div>
                </div>
                <div class="maintenance-second maintenance-box">
                  <h6
                    class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-600"
                  >
                    Description
                  </h6>
                  <h6
                    class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-400"
                  >
                    A description of the request comes...
                  </h6>
                </div>
                <div class="maintenance-third flex maintenance-box">
                  <div class="maintenance-status margin-r-70 category-title">
                    <h6
                      class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-600"
                    >
                      Status
                    </h6>
                    <h6
                      class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-400 q-pl-sm status-sign p-relative"
                    >
                      In progress
                    </h6>
                  </div>
                  <div class="maintenance-date category-title">
                    <h6
                      class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-600"
                    >
                      Date
                    </h6>
                    <h6
                      class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-400"
                    >
                      10 / 11 / 2021
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card> -->

    <q-card class="maintenance-card q-mt-none active-card">
      <q-card-section class="card-p-15">
        <div class="main-section">
          <div class="main-wrapper flex items-center">
            <div class="maintenance-first maintenance-box flex items-center">
              <div class="maintenance-img margin-r-30">
                <img src="/src/assets/maintenance-img.png" />
              </div>
              <div class="flex category">
                <div class="maintenance-Category category-title">
                  <h6 class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-600">Category</h6>
                  <!-- <h6 class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-400">{{singleMaintenance.category}}</h6> -->
                </div>
                <div class="maintenance-subcategory category-title">
                  <h6 class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-600">Sub-category</h6>
                  <h6 class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-400">Roof</h6>
                </div>
              </div>
            </div>
            <div class="maintenance-second maintenance-box">
              <h6 class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-600"> Description</h6>
              <h6 class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-400">A description of the request comes...</h6>
            </div>
            <div class="maintenance-third flex maintenance-box">
              <div class="maintenance-status margin-r-70 category-title">
                <h6 class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-600">Status</h6>
                <h6 class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-400 q-pl-sm status-sign p-relative">
                  In progress
                  <img class="notiication-icon" src="/src/assets/bell-icon.png"/>
                </h6>
              </div>
              <div class="maintenance-date category-title">
                  <h6 class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-600">Date</h6>
                  <h6 class="f-14 main-color q-mt-none q-mb-none text-left line-height-21 fw-400">10 / 11 / 2021</h6>
              </div>
            </div>
          </div>
        </div>
      </q-card-section>
    </q-card>
    <div class="text-left new-maintennance-request">
      <q-btn
        label="New Maintenance Request"
        class="margin-t-20 btn-fixwd-height p-relative text-capitalize bg-primary new-maintenance-btn"
        type="button"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MaintenanceRequestList',
  props: {
			singleMaintenance: {
				id: Number,
				category: String,
				subCategory: String,
				description: String,
        status:String,
        dateValue:String
			},
  },
  created() {
    console.log(this.singleMaintenance)
  }
})
</script>
