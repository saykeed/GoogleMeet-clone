<template>
  <div class="room">
      <div v-if="options" class="roomhead">
          <router-link to="/">
            <i class="material-icons">arrow_back</i>
          </router-link>
          <p>amp-ydwz-jky <i class="material-icons">keyboard_arrow_right</i></p>
          <i class="material-icons">refresh</i>
          <i class="material-icons">volume_up</i>
      </div>
      <video ref="localvid" id="localvid" muted autoplay></video>
      <video ref="remotevid" id="remotevid" @click="toggleOptions" autoplay></video>
      <div v-if="options" class="roomfoot">
          <i class="material-icons">call_end</i>
          <i class="material-icons">videocam</i>
          <i class="material-icons">mic</i>
          <i class="fa fa-ellipsis-v"></i>
      </div>
      <p ref="errmsg"></p>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const localvid = ref(null)
        const options = ref(true)
        const toggleOptions = () => {
            options.value = !options.value
        }
        //{audio: true, video: true})
        
        

        return { toggleOptions, options, localvid }
    },
    mounted() {
        //let p = this.$refs.errmsg
        const getLocalStream = async () => {

            navigator.mediaDevices.getUserMedia({audio: true, video: true})
            .then((stream) => {
                localvid.value.srcObject = stream
            })
            .catch((err) => {
                console.log('error found:' , err)
               // p.innerHTML = err;
            })
            
        }
        getLocalStream()
    }
}
</script>

<style>
.room{
    background: #121212;
    height: 100vh;
    width: 100vw;
    color: white;
    position: relative;
}

.room video{
    object-fit: cover;
}

.roomhead{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: 90%;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
}
.roomhead a{
    color: white;
}
.roomhead i{
    vertical-align: middle;
    cursor: pointer;
}
.roomhead p{
    width: 50%;
    cursor: pointer
}

video#localvid{
    position: absolute;
    top: 50px;
    left: 30px;
    width: 30%;
    height: 150px;
    border-radius: 15px;
    z-index: 9999;
    border: 1px solid white;
}

video#remotevid{
    position: absolute;
    width: 100%;
    height: 100%;
}



.roomfoot{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: 90%;
    margin: 0 auto;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
}

.roomfoot i{
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.227);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.roomfoot i:first-child{
    background: red;
}
</style>