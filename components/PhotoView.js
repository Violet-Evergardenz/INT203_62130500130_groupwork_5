app.component(
    'pic-view',{
        props:{
            selectpic:{
                type:Array
                
            }
            ,bigpic:{
                type:Boolean
            }
        },
       template:
       /*html*/
       `
       <div v-show="bigpic">
      <div v-for="(task2,index) in selectpic" class="px-1.5 flex space-x-4 justify-center items-center bg-black">
        <i class="material-icons text-7xl text-white" @click="chevron_left">
          chevron_left
        </i>
        <div class="relative">
          <div class="absolute top-1 right-1  ">
            <i class="material-icons text-5xl text-black animate-pulse" v-on:click="closebp">
              cancel
            </i>
          </div>
          <img :src="task2.image" class="w-96" v-if="!task2.done" />
          <img :src="task2.imagelike" class="w-96" v-if="task2.done" />
        </div>
        <i class="material-icons text-7xl text-white" @click="chevron_right">
          chevron_right
        </i>
      </div>
    </div>
       `
    
    ,
    methods: {
        chevron_right() {
           
            this.$emit('chevron-right')
            
        },
        chevron_left() {
           
            this.$emit('chevron-left')
            
        },
        closebp() {
           
            this.$emit('closebp')
            
        }
    }
    }
)