<script lang="ts">
import { defineComponent } from 'vue'

import { init as initNavigation } from '@/js/animations/navigation'
import { init as initPageAnimation } from '@/js/animations/page'
import { init as initCopy } from '@/js/utils/copy-to-clipboard'

import AnimationMain from '@/vue/atoms/animations/animation-main.vue'

export default defineComponent({
    components: { 'animations--animation-main' : AnimationMain},
    mounted() {
        initNavigation()
        initPageAnimation()
        initCopy()
    }
})
</script>