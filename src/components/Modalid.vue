<template>
  <div class="modalId">
      <div class="modal">
          <i class="material-icons">close</i>
          <div>i am the modal</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .modalId{
        background: rgba(0, 0, 0, 0.727); 
        color: black;
        width: 100vw;
        height: 100vh;
        z-index: 999999;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .modalId .modal{
        background: white;
        width: 85%;
        padding: 20px;
        border-radius: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }
    
</style>