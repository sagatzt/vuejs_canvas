<template>
  <div class="hello">
    <h1 class="marianna">{{ msg }}</h1>
    <p>Este ejemplo lo seguí del siguiente tutorial: </p>
    <a href="https://dev.to/reiallenramos/drawing-in-vue-using-mousemove-event-34cg">
      https://dev.to/reiallenramos/drawing-in-vue-using-mousemove-event-34cg
    </a>      
    <div>Mensaje:
      <input v-model="message"><button @click="addMessage">Añadir mensaje</button>
    </div>
    <div>X:<input v-model="x">Y:<input v-model="y"></div>
    <div>Zoom:
      <button @click="zoomIn">Zoom IN</button> | <button @click="zoomOut">Zoom Out</button>
    </div>
    <canvas id="myCanvas" :width="width" :height="height" @click="showCoordinates"/>
  </div>
</template>

<script>
import { ref,onMounted } from '@vue/runtime-core'
//http://vuejscode.com/vue-window-size
import { useWindowSize } from 'vue-window-size'

export default {
  name: 'HelloWorld2',
  props: {
    msg: String,
  },setup(){
    let canvas=null
    const width = ref(useWindowSize().width)
    const height = ref(useWindowSize().height)
    let x=ref(0)
    let y=ref(0)
    let message=ref("")

    onMounted(()=>{
      var c = document.getElementById("myCanvas")
      canvas = c.getContext('2d')
    })

    function showCoordinates(e){
      x.value=e.offsetX
      y.value=e.offsetY
    }

    function addMessage() {
      //https://www.w3schools.com/graphics/canvas_text.asp
      canvas.font="30px Arial"
      canvas.fillText(message.value,x.value,y.value)
      
    }

    function zoomIn(){
      canvas.scale(2, 5)
    }

    function zoomOut(){
      canvas.scale(1,3)
    }
    
    return {
      canvas, x, y, width, height,
      message,addMessage,
      showCoordinates,
      zoomIn,zoomOut
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
  background:$bg;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#myCanvas {
  border: 1px solid grey;
  background:red;
}

</style>
