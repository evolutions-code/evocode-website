import { onMounted, onUnmounted, ref, type Ref } from 'vue'

export function useReveal<T extends HTMLElement = HTMLElement>(
  options: IntersectionObserverInit = { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
  once = true
): { el: Ref<T | null> } {
  const el = ref<T | null>(null) as Ref<T | null>
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    if (!el.value) return
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          if (once && observer) observer.unobserve(entry.target)
        } else if (!once) {
          entry.target.classList.remove('in-view')
        }
      })
    }, options)
    observer.observe(el.value)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { el }
}
