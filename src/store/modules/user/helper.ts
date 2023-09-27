import { ss } from '@/utils/storage'

const LOCAL_NAME = 'userStorage'

export interface UserInfo {
  avatar: string
  name: string
  description: string
}

export interface UserState {
  userInfo: UserInfo
}

export function defaultSetting(): UserState {
  return {
    userInfo: {
      avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/98/34/21/983421ca-84e0-a4b2-c415-b86c4130dbd4/AppIcon-0-1x_U007emarketing-0-4-0-sRGB-0-85-220.png/230x0w.webp',
      name: 'WeChat',
      description: 'Power by <a href="https://github.com/Chanzhaoyu/chatgpt-web" class="text-blue-500" target="_blank" >chatgpt-web</a>',
    },
  }
}

export function getLocalState(): UserState {
  const localSetting: UserState | undefined = ss.get(LOCAL_NAME)
  return { ...defaultSetting(), ...localSetting }
}

export function setLocalState(setting: UserState): void {
  ss.set(LOCAL_NAME, setting)
}
