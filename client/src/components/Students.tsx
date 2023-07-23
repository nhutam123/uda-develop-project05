import dateFormat from 'dateformat'
import { History } from 'history'
import update from 'immutability-helper'
import * as React from 'react'
import {
  Button,
  Checkbox,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Image,
  Loader,
  Table,
  Label,
  Menu
} from 'semantic-ui-react'

import {
  createStudent,
  deleteStudent,
  getStudents,
  patchStudent
} from '../api/students-api'
import Auth from '../auth/Auth'
import { Student } from '../types/Student'

interface StudentsProps {
  auth: Auth
  history: History
}

interface StudentState {
  students: Student[]
  newStudentName: string
  loadingStudents: boolean
}

export class Students extends React.PureComponent<StudentsProps, StudentState> {
  state: StudentState = {
    students: [],
    newStudentName: '',
    loadingStudents: true
  }

  handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newStudentName: event.target.value })
  }

  onEditButtonClick = (studentId: string) => {
    this.props.history.push(`/students/${studentId}/edit`)
  }

  onStudentCreate = async (event: React.ChangeEvent<HTMLButtonElement>) => {
    try {
      const dueDate = this.calculateDueDate()
      const newTodo = await createStudent(this.props.auth.getIdToken(), {
        name: this.state.newStudentName,
        dueDate
      })
      this.setState({
        students: [...this.state.students, newTodo],
        newStudentName: ''
      })
    } catch {
      alert('Todo creation failed')
    }
  }

  onStudentDelete = async (studentId: string) => {
    try {
      await deleteStudent(this.props.auth.getIdToken(), studentId)
      this.setState({
        students: this.state.students.filter(
          (student) => student.studentId !== studentId
        )
      })
    } catch {
      alert('Todo deletion failed')
    }
  }

  onStudentCheck = async (pos: number) => {
    try {
      const student = this.state.students[pos]
      await patchStudent(this.props.auth.getIdToken(), student.studentId, {
        name: student.name,
        dueDate: student.dueDate,
        isGraduated: !student.isGraduated
      })
      this.setState({
        students: update(this.state.students, {
          [pos]: { isGraduated: { $set: !student.isGraduated } }
        })
      })
    } catch {
      alert('Student check failed')
    }
  }

  async componentDidMount() {
    try {
      const students = await getStudents(this.props.auth.getIdToken())
      this.setState({
        students,
        loadingStudents: false
      })
    } catch (e) {
      alert(`Failed to fetch Students: ${(e as Error).message}`)
    }
  }

  render() {
    return (
      <div>
        <Header as="h1">Student management</Header>

        {this.renderCreateStudentInput()}

        {this.renderStudents()}
      </div>
    )
  }

  renderCreateStudentInput() {
    return (
      <Grid.Row>
        <Grid.Column width={16}>
          <Input
            action={{
              color: 'teal',
              labelPosition: 'left',
              icon: 'add',
              content: 'New Student',
              onClick: this.onStudentCreate
            }}
            fluid
            actionPosition="left"
            placeholder="To change the world..."
            onChange={this.handleNameChange}
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Divider />
        </Grid.Column>
      </Grid.Row>
    )
  }

  renderStudents() {
    if (this.state.loadingStudents) {
      return this.renderLoading()
    }

    return this.renderTodosList()
  }

  renderLoading() {
    return (
      <Grid.Row>
        <Loader indeterminate active inline="centered">
          Loading Student
        </Loader>
      </Grid.Row>
    )
  }

  renderTodosList() {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Graduate</Table.HeaderCell>
            <Table.HeaderCell>Image</Table.HeaderCell>
            <Table.HeaderCell>Edit</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.state.students.map((student, pos) => {
            return (
              <Table.Row>
                <Table.Cell>
                  <Checkbox
                    onChange={() => this.onStudentCheck(pos)}
                    checked={student.isGraduated}
                  />
                </Table.Cell>
                <Table.Cell>{student.name}</Table.Cell>
                <Table.Cell>{student.dueDate}</Table.Cell>
                <Table.Cell>{student.isGraduated && 'x'}</Table.Cell>
                <Table.Cell>
                  {student.imageUrl && (
                    <Image src={student.imageUrl} size="small" wrapped />
                  )}
                </Table.Cell>
                <Table.Cell>
                  {
                    <Button
                      icon
                      color="blue"
                      onClick={() => this.onEditButtonClick(student.studentId)}
                    >
                      <Icon name="pencil" />
                    </Button>
                  }
                </Table.Cell>
                <Table.Cell>
                  {
                    <Button
                      icon
                      color="red"
                      onClick={() => this.onStudentDelete(student.studentId)}
                    >
                      <Icon name="delete" />
                    </Button>
                  }
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    )
  }

  calculateDueDate(): string {
    const date = new Date()
    date.setDate(date.getDate() + 7)

    return dateFormat(date, 'yyyy-mm-dd') as string
  }
}
