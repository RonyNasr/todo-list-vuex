<template lang="html">
  <div class="list-container">
    <h3>Lists</h3>
    <div class="list-actions">
      <input :value="newList" @change="getList">
      <button type="button" @click="addList">New List</button>
    </div>
    <div class="list-listing">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Lists',
  data () {
    return {
      listName: ''
    }
  }
}
</script>

<style scoped>

.list-container {
  width: 200px;
  height: 100%;
  background-color: grey;
}

.list-actions {
  width:100%;
  height: 50px;
}

</style>
