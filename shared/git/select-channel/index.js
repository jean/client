// @flow
import * as React from 'react'
import {Button, ScrollView, RadioButton, Text, Box} from '../../common-adapters'
import {globalMargins, globalStyles} from '../../styles'

export type Props = {
  channelNames: Array<string>,
  selected: string,
  onSelect: (channel: string) => void,
  onSubmit: () => void,
  onCancel: () => void,
  waiting: boolean,
}

export default (props: Props) => (
  <ScrollView contentContainerStyle={{padding: globalMargins.large}}>
    <Box
      style={{
        ...globalStyles.flexBoxColumn,
        alignItems: 'center',
        flex: 1,
        paddingTop: globalMargins.xtiny,
        paddingBottom: globalMargins.xtiny,
      }}
    >
      <Text type="Header">Select a channel</Text>
      <Box
        style={{
          ...globalStyles.flexBoxColumn,
          marginBottom: globalMargins.medium,
          marginTop: globalMargins.medium,
        }}
      >
        {props.channelNames.map(name => (
          <Box key={name} style={globalStyles.flexBoxRow}>
            <RadioButton
              label={name}
              selected={props.selected === name}
              style={styleRadioButton}
              onSelect={selected => (selected ? props.onSelect(name) : undefined)}
            />
          </Box>
        ))}
      </Box>
      <Button
        waiting={props.waiting}
        type="Primary"
        label="Submit"
        onClick={() => {
          props.onSubmit()
          props.onCancel()
        }}
        small={true}
      />
    </Box>
  </ScrollView>
)

const styleRadioButton = {
  ...globalStyles.flexBoxRow,
  marginLeft: globalMargins.tiny,
}
