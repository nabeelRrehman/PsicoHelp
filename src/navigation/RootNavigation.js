import React from 'react'

import { CommonActions } from '@react-navigation/native'

export const isReadyRef = React.createRef()
export const navigationRef = React.createRef()

export function navigate(name, params) {
  if (params && params.reset) {
    navigationRef.current.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name, params }],
      }),
    )
  }

  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params)
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}
