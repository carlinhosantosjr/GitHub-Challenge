import { Container, HeaderCard, MarkDownContainer } from './styles'
import { postCardProps } from '../../../../contexts/UserContext'

export function PostCard(data:postCardProps) {
  const newText = truncateByLetters(data.body, 200)

  function truncateByLetters(text: string, maxLetters: number) {
    if (text.length > maxLetters) {
      return text.slice(0, maxLetters) + '...'
    }
    return text
  }

  function calculateDate(date:string) {
    const postDate = new Date(date)
    const currentDate = new Date()
    const differenceMiliseconds = currentDate.getTime() - postDate.getTime()
    const diferencaEmDias =
    Math.floor(differenceMiliseconds / (1000 * 60 * 60 * 24))
    return diferencaEmDias.toString()
  }

  return (
    <Container>
      <HeaderCard>
        <h3>{data.title}</h3>
        <span>Há {calculateDate(data.created_at)} dias</span>
      </HeaderCard>
      <MarkDownContainer>
        {newText}
      </MarkDownContainer>
    </Container>
  )
}
