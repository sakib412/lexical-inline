import "./styles/styles.css";

import { useEffect } from 'react';
// import { $getRoot, $getSelection } from 'lexical';

import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
// import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';

import FloatingTextFormatToolbarPlugin from './plugins/FloatingTextFormatToolbarPlugin';
import Placeholder from './ui/Placeholder';
import defaultTheme from './themes/default';

// Lexical React plugins are React components, which makes them
// highly composable. Furthermore, you can lazy load plugins if
// desired, so you don't pay the cost for plugins until you
// actually use them.
function MyCustomAutoFocusPlugin() {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
        // Focus the editor when the effect fires!
        editor.focus();
    }, [editor]);

    return null;
}

// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
    console.error(error);
}

const placeholder = <Placeholder>Enter some text</Placeholder>;

function Editor() {
    const initialConfig = {
        namespace: 'Lexical',
        theme: defaultTheme,
        onError,
    };

    return (
        <div className='editor-container'>
            <LexicalComposer initialConfig={initialConfig}>
                <RichTextPlugin
                    contentEditable={
                        <ContentEditable className="editor-input" />
                    }
                    placeholder={placeholder}
                    ErrorBoundary={LexicalErrorBoundary}
                />
                <HistoryPlugin />
                <MyCustomAutoFocusPlugin />
                <FloatingTextFormatToolbarPlugin />
            </LexicalComposer>
        </div>
    );
}

export default Editor;