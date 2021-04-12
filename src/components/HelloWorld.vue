<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Este ejemplo lo seguí del siguiente tutorial: </p>
    <a href="https://dev.to/reiallenramos/drawing-in-vue-using-mousemove-event-34cg">
      https://dev.to/reiallenramos/drawing-in-vue-using-mousemove-event-34cg
    </a>      
    <h3>{{x}}, {{y}}</h3>
    <canvas id="myCanvas" width="560" height="360" @mousemove="draw"/>
  </div>
</template>

<script>
import { ref,onMounted } from '@vue/runtime-core'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },setup(){
    let canvas=null
    let x=ref(0)
    let y=ref(0)

    onMounted(()=>{
      var c = document.getElementById("myCanvas")
      canvas = c.getContext('2d')
    })

    function showCoordinates(e){
      x.value=e.offsetX
      y.value=e.offsetY
    }

    function drawLine(x1, y1, x2, y2) {
      let ctx = canvas
      ctx.beginPath()
      ctx.strokeStyle = 'black'
      ctx.lineWidth = 1
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
      ctx.closePath()
    }
    
    function draw(e) {
      drawLine(x.value, y.value, e.offsetX, e.offsetY)
      x.value = e.offsetX
      y.value = e.offsetY
    }
    return {
      canvas, x, y,
      showCoordinates, drawLine,draw
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
}

</style>
