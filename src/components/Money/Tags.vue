<template>
  <div class="tags">
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
     <ul class="current">
      <li v-for="tag in tagList" :key="tag.id"
          :class="{selected: selectedTags.indexOf(tag)>=0}"
          @click="toggle(tag)">{{tag.name}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component} from 'vue-property-decorator'

@Component({
  computed:{
    tagList(){
     return this.$store.state.tagList;
    return []
    }
  }
})
  export default class Tags extends Vue {
    selectedTags: string[] = [];
    get tagList() {
      return this.$store.state.tagList;
    }
  
   toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
      this.$emit('Update:value',this.selectedTags)
    }
    create() {
      this.$store.commit('fetchTags')
      }
    }
  
</script>

<style lang="scss" scoped>
  .tags {
    font-size: 14px;
    padding: 16px;
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;
    > .current {
      display: flex;
      flex-wrap: wrap;
      > li {
        background: rgb(254,254,36);
        $h: 24px;
        height: $h;
        line-height: $h;
        border-radius:$h/2;
        padding: 0 16px;
        margin-right: 12px;
        margin-top: 4px;
        &.selected{
          background:rgb(178,138,87) ;
        }
      }
    }
    > .new {
      padding-top: 16px;
      button {
        background: transparent;
        border: none;
        color: #999;
        border-bottom: 1px solid;
        padding: 0 4px;
      }
    }
  }

</style>