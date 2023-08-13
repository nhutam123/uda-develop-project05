import { useRouter } from 'next/router'
import { calculateDueDate } from '../../../shares/utils'
import { CardType } from '../types'

export const useCard = (props: CardType) => {
  const router = useRouter()
  const { item, login, handleJoinCourse } = props
  const { title, videoUrl } = item

  const handleJoin = () => {
    const token = localStorage.getItem('token')
    if (token) {
      handleJoinCourse(token, {
        name: title,
        videoUrl: videoUrl,
        dueDate: calculateDueDate()
      })
      router.push({
        pathname: '/student',
        query: { videoUrl: videoUrl, title: title }
      })
    } else {
      login()
    }
  }

  return {
    handleJoin,
    item,
    videoUrl,
    title
  }
}
