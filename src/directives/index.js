import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install(app) {
        app.directive('img-lazy', {
            mounted(el, binding) {
                // el即指令绑定的元素，binding.value即指令的值
                const { stop } = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        if(isIntersecting) {
                            el.src = binding.value
                            // 加载一次后停止观察
                            stop()
                        }
                    },
                )
            }
        })
    }
}