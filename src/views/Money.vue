<template>
  <Layout class-prefix="layout">
    <NumberPad @update:value="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes field-name="备注" placeholder="在这里输入备注" @update:value="onUpdateNotes"/>
    <Tags/>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';
  import { Component} from 'vue-property-decorator';
  import OldStore from '@/store/index2.ts';
  import store from '@/store/index.ts';

  @Component({
    components: {Tags, Notes, Types, NumberPad},
    computed:{
      count(){
        return store.state.count
      }
    }
  })
  export default class Money extends Vue {
    recordList = OldStore.recordList;
    record: RecordItem = {
      tags: [], notes: '', type: '-', amount: 0
    }


  
    onUpdateNotes(value: string){
      this.record.notes = value
    }

    saveRecord(){
     OldStore.createRecord(this.record)
    }
  }

</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
