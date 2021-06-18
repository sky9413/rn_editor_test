import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RichEditor, RichToolbar, actions, defaultActions, createHTML, getContentCSS } from './editor/index'

export default function App() {

  const [richText, setrichText] = useState();
  const [isrichtextLoaded, setisrichtextLoaded] = useState();
  // const defaultActions = [
  //   actions.insertImage,
  //   actions.setBold,
  //   actions.setItalic,
  //   actions.insertBulletsList,
  //   actions.insertOrderedList,
  //   actions.insertLink
  // ];

  const onEditorInitialized = () => {
    setisrichtextLoaded(true)
  }
  console.log(isrichtextLoaded);
  useEffect(() => {
    onEditorInitialized();
  }, []);

  return (
    <View style={{ marginTop: 99 }}>
      <Text>___________________Editor Start_________________</Text>
      <RichEditor
        ref={(r) => richText == r}
        initialContentHTML={'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>'}

        editorInitializedCallback={() => onEditorInitialized()}
      />
      {isrichtextLoaded === true
        ? <RichToolbar
          getEditor={() => richText} />
        : null
      }


    </View>
  );
}
