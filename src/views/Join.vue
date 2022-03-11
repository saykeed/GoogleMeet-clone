<template>
  <div class="joinPage">
      <div class="joinPageHead">
          <router-link to="/">
            <i class="material-icons">arrow_back</i>
          </router-link>
          <h3>Join with a code</h3>
      </div>
      <p>Enter the code provided by the meeting organizer.</p>
      <input type="text"  id="meetcode" placeholder="Meeting Code">
      <div @click="joinMeet" class="enterBtn">Enter</div>
  </div>
</template>

<script>
export default {
setup() {
    const joinMeet = () => {
        alert('hold on pls, while we fetch the meet for you')
    }


    return { joinMeet }
}
}
</script>

<style>
.joinPage{
    width: 100vw;
    height: 100vh;
    background: white;
    color: black;
    padding: 10px 15px;
}
.joinPageHead{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
}
#meetcode{
    width: 100%;
    max-width: 500px;
    margin: 20px auto;
    height: 50px;
    padding: 10px;
    border-radius: 10px 10px 0 0;
    background: rgba(0, 145, 255, 0.138);
    color: rgba(0, 0, 0, 0.501);
    border: none;
    border-bottom: 3px solid rgb(0, 145, 255);
}
#meetcode:focus{
    outline: none;
}
div.enterBtn{
    padding: 10px 20px;
    border-radius: 5px;
    background: rgb(0, 145, 255);
    color: white;
    width: fit-content;
    margin: 0 auto;
}
</style>