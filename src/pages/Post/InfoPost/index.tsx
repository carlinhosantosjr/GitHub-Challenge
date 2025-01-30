import {
  Container, HeaderInfo, ChevronLeft, ArrowUpRight,
  TitleContainer, FooterInfo,
  GithubIcon,
  CalendarDayIcon,
  CommentIcon,
} from './styles'
import {
  faChevronLeft, faArrowUpRightFromSquare, faCalendarDay,
  faComment,
} from
  '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function InfoPost() {
  return (
    <Container>
      <HeaderInfo>
        <span><ChevronLeft icon={faChevronLeft} />VOLTAR</span>
        <span>VER NO GITHUB
          <ArrowUpRight icon={faArrowUpRightFromSquare} />
        </span>
      </HeaderInfo>
      <TitleContainer>
        <h2>JavaScript data types and data structures</h2>
      </TitleContainer>
      <FooterInfo>
        <div>
          <GithubIcon icon={faGithub} />
          <span>cameronwll</span>
        </div>
        <div>
          <CalendarDayIcon icon={faCalendarDay} />
          <span>Há 1 dia</span>
        </div>
        <div>
          <CommentIcon icon={faComment} />
          <span>5 comentários</span>
        </div>
      </FooterInfo>
    </Container>
  )
}
