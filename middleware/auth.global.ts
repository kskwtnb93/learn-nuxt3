export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore()

  const redirect = authStore.validateRoute(to)
  if (redirect) navigateTo(redirect)
})
