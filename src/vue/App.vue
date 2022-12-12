<script lang="ts">
import { defineComponent } from 'vue'


import { init as initNavigation } from '@/js/animations/navigation'
import { init as initPageAnimation } from '@/js/animations/page'
import { init as initCopy } from '@/js/utils/copy-to-clipboard'

import AnimationMain from '@/vue/atoms/animations/animation-main.vue'
import ContentCode from '@/vue/molecules/content/content--code.vue'
// import FooterWeather from '@/vue/molecules/footer/footer--weather.vue'

export default defineComponent({
    components: { 
        'animations--animation-main': AnimationMain,
        'content--code': ContentCode,
        // 'footer--weather': FooterWeather,
    },
    mounted() {
        initNavigation()
        initPageAnimation()
        initCopy()
    }
})
</script>