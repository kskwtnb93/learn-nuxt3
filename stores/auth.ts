import type { User } from '~/types/user'

export const useAuthStore = defineStore(
  'auth',
  () => {
    const user = ref<User>()

    const setUser = (newUser: User) => {
      user.value = newUser
    }

    const clearUser = () => {
      user.value = undefined
    }

    return {
      user,
      setUser,
      clearUser,
    }
  },
)
