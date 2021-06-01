<template>
     <svg class="icon">
         <use :xlink:href="'#'+name"/>
     </svg>
</template>

<script setup lang="ts">
    // let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);/*使用时取消注释*/
    // try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}/*使用时取消注释*/
    
    export default {
        props: ['name'],
        name: 'Icon'
        };

</script>

<style lang="scss" scoped>
     .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }
 
</style>