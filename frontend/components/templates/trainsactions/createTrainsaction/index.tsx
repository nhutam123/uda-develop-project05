import { Button } from '../../../atoms/button'
import { Form } from '../../../atoms/form'
import { InputText } from '../../../atoms/inputText'
import { CreateTrainsactionProps } from './types'
import { ButtonContainer } from '../../../atoms/container/buttonContainer'
import { FieldContainer } from '../../../atoms/container/fieldContainer'
import { ContainerPage } from '../../../atoms/container'
import { Colors } from '../../../../shares/const/colors'
import { TextArea } from '../../../atoms/textField'
import { SelectOption } from '../../../atoms/selectOption'
import { useCreate } from './useCreate'
import { DatePickerAtom } from '../../../atoms/datePicker'

const { GREEN, WHITE } = Colors

export const CreateTrainsaction = (props: CreateTrainsactionProps) => {
  const {
    handleChange,
    transaction,
    profitTakingPercen,
    percenOptions,
    setProfitTakingPercen,
    setStopLossPercen,
    stopLossPercen,
    handleSubmit,
    handleDatePickerChange
  } = useCreate(props)

  return (
    <ContainerPage>
      <h1>CreateTrainsaction</h1>

      <Form handleSubmit={handleSubmit}>
        <FieldContainer>
          <InputText
            value={transaction.stockName}
            pcWidth="120px"
            label="Name"
            onChange={(event) => handleChange(event, 'stockName')}
            placeholder="Stock code"
          />
          <InputText
            value={transaction.purchasePrice}
            pcWidth="120px"
            label="Price"
            onChange={(event) => handleChange(event, 'purchasePrice', 'number')}
          />
          <InputText
            value={transaction.sellPrice}
            pcWidth="120px"
            label="Sell price"
            onChange={(event) => handleChange(event, 'sellPrice', 'number')}
          />
        </FieldContainer>
        <FieldContainer>
          <SelectOption
            label="Choose taking profit percen"
            value={profitTakingPercen}
            options={percenOptions}
            onChange={(event) =>
              setProfitTakingPercen(Number(event.currentTarget.value))
            }
            width="100px"
          ></SelectOption>
          <InputText
            value={transaction.profitTakingPrice}
            pcWidth="120px"
            label="Taking profit price"
            onChange={(event) =>
              handleChange(event, 'profitTakingPrice', 'number')
            }
            isDisable
          />
        </FieldContainer>
        <FieldContainer>
          <SelectOption
            label="Choose Stop loss percen"
            value={stopLossPercen}
            options={percenOptions}
            onChange={(event) =>
              setStopLossPercen(Number(event.currentTarget.value))
            }
            width="100px"
          ></SelectOption>
          <InputText
            value={transaction.stopLossPrice}
            pcWidth="120px"
            label="Stop loss price"
            onChange={(event) => handleChange(event, 'stopLossPrice', 'number')}
            isDisable
          />
        </FieldContainer>
        <FieldContainer>
          <InputText
            value={transaction.quantity}
            pcWidth="120px"
            label="Quantity"
            onChange={(event) => handleChange(event, 'quantity', 'number')}
          />
          <InputText
            value={transaction.totalPrice}
            pcWidth="120px"
            label="Total price"
            onChange={(event) => handleChange(event, 'totalPrice', 'number')}
            isDisable
          />
          <InputText
            value={transaction.timing}
            pcWidth="120px"
            label="Timing"
            onChange={(event) => handleChange(event, 'timing')}
          />
        </FieldContainer>
        <DatePickerAtom
          value={transaction.sellDay}
          label="Sell day"
          onChange={(date) => handleDatePickerChange(date || null, 'sellDay')}
        />
        <DatePickerAtom
          value={transaction.purchaseDay}
          label="Purchase day"
          onChange={(date) =>
            handleDatePickerChange(date || null, 'purchaseDay')
          }
        />
        <SelectOption
          label="Discipline"
          value={transaction.isDiscipline.toString()}
          options={[
            { name: 'yes', value: 'true' },
            { name: 'no', value: '' }
          ]}
          onChange={(event) => handleChange(event, 'isDiscipline')}
          width="120px"
        ></SelectOption>
        <TextArea
          label="Description"
          value={transaction.description}
          onChange={(event) => handleChange(event, 'description')}
        />
        <ButtonContainer>
          <Button
            htmlType="submit"
            text="Create"
            color={WHITE}
            backgroundColor={GREEN}
          />
        </ButtonContainer>
      </Form>
    </ContainerPage>
  )
}
