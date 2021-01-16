<template>
  <div class="content">    
    <form @submit.prevent="save">
      <div class="input-group mb-2">        
        <input type="text" v-model="inputSearch" class="form-control" id="inlineFormInputGroup" placeholder="Enter name">
      </div>
      <div class="users">
        <div class="form-row">
          <div class="col-9">
            <p>Name</p>
          </div>
          <div class="col">
            <p>City</p>
          </div>        
        </div>
        <div class="grid">
          <div v-for="user in users" :key="user.id">
            <div class="form-row">
              <div class="col-9">
                <div class="form-check mb-2">
                  <input class="form-check-input" :value="user.id" v-model="checkedUsers" type="checkbox" id="autoSizingCheck">
                  <label class="form-check-label" for="autoSizingCheck">
                    {{user.name}}
                  </label>
                </div>
              </div>          
              <div class="col">
                <p>{{user.address.city}}</p>
              </div>
            </div>
            <hr />            
          </div>
        </div>        
      </div>
      <button type="submit" class="btn btn-primary">Save</button>      
    </form> 
      
  </div>
</template>

<script>
import swal from 'sweetalert'
export default {
  async fetch({store}){
    if(store.getters['users/users'].length === 0){
      await store.dispatch('users/fetch')
    }    
  },
  data: () => ({
    checkedUsers: [],  
    inputSearch: ''
  }),
  computed: {
    users() {
      return this.$store.getters['users/users'].filter(data => {
        return this.inputSearch == '' || data.name.toLowerCase().indexOf(this.inputSearch.toLowerCase()) !== -1
      })
    }
  },
  methods: {
    async save(){      
      await this.$store.dispatch('users/addUsers', this.checkedUsers)
      swal("Данные успшно отправлены")
      this.checkedUsers = []
    }    
  }
}
</script>

<style>

  .btn {
    border-radius: 0 !important;
    float: right;
    margin-right: 20px;
    margin-top: 30px;
  }

  .form-row{
    margin-top: 10px;
  }

  .users {
    margin-top: 40px;
  }
  .grid {
    background: #fff;
    border-radius: 5px;
    border: 1px solid rgb(223, 223, 223);
    padding: 20px;
  }
 
  .content{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50em;
  }

  .input-group{
    width: 800px; 
    box-shadow: 0 0 10px rgba(0,0,0,0.2); 

  }

  .input-group input {
    border-radius: 0 0 0 0 !important;
    padding: 5px 2px 5px 25px;
    background: url('http://3.bp.blogspot.com/-4w14hQHr5yQ/Tgm6u7KwUkI/AAAAAAAACAI/Hu2poBOPx3g/s25/search.png') no-repeat scroll 0 50%;
    outline: none;
  }

  
</style>
