app.component('pic-search', {
    props: {
        check: {
            type: Boolean
        }

    },
    template:
        /*html*/
        `
        <div class="flex space-y-4  justify-center">
         <div v-if="check" class="space-x-4">
        <input  @keyup.enter='searchPressenter'  v-model="inputTask" placeholder="Enter a new task ..."
         class="text border p-2 bg-white rounded flex-1 border-b-2 border-blue-300">
        <button @click="popup" class="bg-green-500 text-white  py-1 px-6 rounded">cancel</button>
        <div class="text-center text-red-600 " v-if="check">please press the enter for search !! </div>
        </div>
        
      <i @click="popup" class="material-icons" v-if="!check">
        search
      </i>
    </div>
    
     `
    ,
    data() {
        return {
            inputTask: ''
        }
    }
    ,
    methods: {
        searchPressenter() {
            var n = this.inputTask
            this.$emit('search-Pressenter', n)
        }
        , popup() {
            this.$emit('pop-up')
        }
    }

})