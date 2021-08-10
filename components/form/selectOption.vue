<template>
    <select class="form-control">
        <option selected value="" disabled>{{placeholder}}</option>
        <option v-for="(item, index) in optionList" :key="index" value="item.id">{{item.name}}</option>
        
    </select>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: "Pilihan",
        },
        optionList: {
            type: Array,
            default: () => [],
        },
    },
}
</script>