/* eslint-disable react-hooks/exhaustive-deps */
import { CreateStockRequest } from '../../../../../shares/types/stocks'
import { percenOption } from '../../../../../shares/utils/percenOptionArray'
import { useState, useEffect, FormEvent } from 'react'
import { defaultValue } from '../const'
import { CreateTrainsactionProps } from '../types'

export const useCreate = (props: CreateTrainsactionProps) => {
  const percenOptions = percenOption()
  const [transaction, setTrainsaction] =
    useState<CreateStockRequest>(defaultValue)
  const [stopLossPercen, setStopLossPercen] = useState(0)
  const [profitTakingPercen, setProfitTakingPercen] = useState(0)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    props.handleSubmit(transaction)
  }

  const handleChange = (event: FormEvent<any>, name: string, type?: string) => {
    setTrainsaction({
      ...transaction,
      [name]:
        type == 'number'
          ? Number(event.currentTarget.value)
          : event.currentTarget.value
    })
  }

  const handleDatePickerChange = (date: Date | null, name: string) => {
    setTrainsaction({
      ...transaction,
      [name]: `${date?.getDate()}/${
        Number(date?.getMonth()) + 1
      }/${date?.getFullYear()}`
    })
  }

  useEffect(() => {
    setTrainsaction({
      ...transaction,
      stopLossPrice: transaction.purchasePrice * (1 - stopLossPercen)
    })
  }, [stopLossPercen, transaction.purchasePrice])

  useEffect(() => {
    setTrainsaction({
      ...transaction,
      profitTakingPrice: transaction.purchasePrice * (1 + profitTakingPercen)
    })
  }, [profitTakingPercen, transaction.purchasePrice])
  useEffect(() => {
    setTrainsaction({
      ...transaction,
      totalPrice: transaction.purchasePrice * transaction.quantity
    })
  }, [transaction.quantity, transaction.purchasePrice])

  const handleClick = () => {}

  return {
    setTrainsaction,
    setStopLossPercen,
    handleClick,
    handleChange,
    transaction,
    handleSubmit,
    profitTakingPercen,
    setProfitTakingPercen,
    percenOptions,
    stopLossPercen,
    handleDatePickerChange
  }
}
