<template>
    <div>
        <button type="button" class="btn btn-primary" >
            <i :class="icon"> </i>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: "fas fa-plus",
        },
       
    }
}
</script>
<style scoped>
button {
    position: fixed;
    bottom: 3em;
    right: 3em;
    padding: 1.5em;
}
i {
    font-size: 1.2em;
}
</style>