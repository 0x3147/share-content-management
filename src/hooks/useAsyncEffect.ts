import { useEffect } from 'react'

/**
 * @desc 异步useEffect
 * @Author bk0x114
 * @Date 2023-05-23 18:47:06
 * @param effect 要使用的异步函数
 * @param dependencies 依赖项
 */
const useAsyncEffect = (
  effect: () => Promise<void | (() => void)>,
  dependencies?: any[]
) => {
  return useEffect(() => {
    const cleanupPromise = effect()
    return () => {
      cleanupPromise.then((cleanup) => cleanup && cleanup())
    }
  }, dependencies)
}

export default useAsyncEffect
