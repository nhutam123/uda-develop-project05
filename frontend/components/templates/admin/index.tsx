import { useState } from 'react'
import { Course } from '../../../shares/types'
import {
  getUploadUrl,
  uploadFile
} from '../../../services/student/students-api'
import { useRouter } from 'next/router'

const courseDefault: Course = {
  videoUrl: '',
  typeId: '',
  dueDate: '',
  courseId: '',
  createdAt: '',
  title: ''
}

export const AdminTemplate = () => {
  const router = useRouter()
  const [file, setFile] = useState<any>()
  const [course, setCourse] = useState<Course>(courseDefault)
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files) return
    setFile(files[0])
  }

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    try {
      if (!file) {
        alert('File should be selected')
        return
      }
      const uploadUrl = await getUploadUrl('')
      setCourse({ ...course, videoUrl: uploadUrl })
      await uploadFile(uploadUrl, file)
      router.push('/')
    } catch (e) {
      alert('Could not upload a file: ' + (e as Error).message)
    } finally {
    }
  }

  return (
    <div>
      <input
        value={course?.title}
        onChange={(event) =>
          setCourse({ ...course, title: event.target.value })
        }
      />
      <label>File</label>
      <input
        type="file"
        accept="video/*"
        placeholder="Image to upload"
        onChange={handleFileChange}
      />
      <button
        onClick={(event: any) => {
          handleSubmit(event).catch(() => ({}))
        }}
      >
        Upload
      </button>
    </div>
  )
}
