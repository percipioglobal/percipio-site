<script setup lang="ts">
interface Props {
    code: string
}

defineProps<Props>()
</script>

<template> 
    <span>
        {{ code }}
    </span>
</template>