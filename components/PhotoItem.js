app.component('pic-list', {
    props: {
        taskx: {
            type: Array,
            require: true
        }
        ,
        switchtrue:{
            type:Boolean
        }
        ,
        switchfalse:{
            type:Boolean
        }
        ,notfind:{
            type:Boolean
        }
        ,findingnemo:{
            type:Array
        }

    },
    template:
        /*html*/
        `
        <div class="flex space-x-4 justify-center">
      <div v-for="(task,index) in taskx" class="px-1.5 " v-show="switchtrue ">
        <img :src="task.image" @click="zoomuppic(index)" class="h-96" v-if="!task.done" />
        <img :src="task.imagelike" @click="zoomuppic(index)" class="h-96" v-if="task.done" />
        <div class="flex  justify-center py-5">
          <div class="font-mono text-xl medium " v-if="!task.done">{{task.article}}</div>
          <div class="font-mono text-xl medium text-red-500" v-if="task.done">{{task.article}}</div>
          <i class="material-icons" v-on:click="toggleDone(index)" v-show="!task.done">
            favorite_border
          </i>
          <i class="material-icons text-red-400 animate-pulse" v-on:click="toggleDone(index)" v-show="task.done">
            favorite
          </i>
        </div>
      </div>
      <div v-for="(task,index) in findingnemo" class="px-1.5" v-if ="switchfalse">
        <img :src="task.image" @click="zoomupnemopic(index)" class="h-96" v-if="!task.done" />
        <img :src="task.imagelike" @click="zoomupnemopic(index)" class="h-96" v-if="task.done" />
        <div class="flex  justify-center py-5">
          <div class="font-mono text-xl medium " v-if="!task.done">{{task.article}}</div>
          <div class="font-mono text-xl medium text-red-500" v-if="task.done">{{task.article}}</div>
          <i class="material-icons" v-on:click="toggleDoneNemo(index)" v-show="!task.done">
            favorite_border
          </i>
          <i class="material-icons text-red-400 animate-pulse" v-on:click="toggleDoneNemo(index)" v-show="task.done">
            favorite
          </i>
        </div>
      </div>
      <div v-if="notfind">
        'No photo'
      </div>
    </div>
    `,
    methods: {
        toggleDone(index){
            this.$emit('toggle-done',index)
        },
        zoomuppic(index){
            console.log('click')
            this.$emit('zoomup-pic',index)
        }
        ,
        zoomupnemopic(index){
            console.log('clicknemo')
            this.$emit('zoomup-nemopic',index)
        }
        ,
        toggleDoneNemo(index){
          this.findingnemo[index].done = !this.findingnemo[index].done
          this.$emit('toggleDone-Nemo',index)
            console.log('clickdonenemo')
        }
    }
})