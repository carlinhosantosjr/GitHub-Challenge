import { InfoPost } from './InfoPost'
import { Container, MarkdownContainer } from './styles'
import Markdown from 'react-markdown'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export function Post() {
  const { user } = useContext(UserContext)

  console.log(user.posts)
  return (
    <Container>
      <InfoPost />
      <MarkdownContainer>
        <Markdown
          components={{
            code: ({ className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '')
              return match
                ? (
                  <SyntaxHighlighter language={match[1]} style={oneDark}>
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                  )
                : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                  )
            },
          }}
        >
          {
             user.posts?.[1]?.body ?? ''
          }
        </Markdown>
      </MarkdownContainer>
    </Container>
  )
}
