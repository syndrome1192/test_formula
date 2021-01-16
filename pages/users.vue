<template>
    <div class="grid">
      <h3>All users</h3>
      <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(checkedUsers, idx) in saveUsers" :key="checkedUsers.id" >
              <th scope="row">{{idx + 1}}</th>
              <td>{{ checkedUsers.name }}</td>
              <td>{{ checkedUsers.phone}}</td>
              <td><button type="button" @click="userDelete(checkedUsers.id)" class="btn btn-danger">Удалить</button></td>
            </tr>           
        </tbody>
        </table>
    </div>
</template>
<script>
export default {
  async fetch({store}){
    if(store.getters['users/users'].length === 0){
      await store.dispatch('users/fetch')
    }    
  },  
  computed: {
    saveUsers() {
      const users_arr = []
      if(this.$store.getters["users/newCheckUsers"].length !== 0){
        
        for(let key in this.$store.getters["users/users"]){   
            for(let user_key in this.$store.getters["users/newCheckUsers"]){
                if(this.$store.getters["users/users"][key].id === this.$store.getters["users/newCheckUsers"][user_key]){                
                    users_arr.push(this.$store.getters["users/users"][key])
              }
            }       
            
        }        
      }
      return users_arr      
    },
  },
  methods: {
      async userDelete(id){          
          const del = this.$store.getters["users/newCheckUsers"].filter(user_id => user_id !== id)
          await this.$store.dispatch('users/addUsers', del)
      }
  }
};
</script>

<style scoped>
.grid {
    background: #fff;
    border-radius: 5px;
    border: 1px solid rgb(223, 223, 223);
    padding: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
 }

 .footer{
    position: fixed;
    top: 0;
    bottom: 0;
 }
</style>