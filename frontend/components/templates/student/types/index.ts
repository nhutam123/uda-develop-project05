import { Student } from '../../../../shares/types'

export type StudentProps = {
  title: string
  videoUrl: string
  courses: Student[]
  isLoading: boolean
  handleDelete: (studentId: string) => void
}
