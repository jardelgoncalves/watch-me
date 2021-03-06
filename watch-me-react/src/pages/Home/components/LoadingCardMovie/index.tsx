import { Col } from '../../../../components/Col';
import './styles.scss';

interface LoadingCardMovieProp {
  quantity: number;
  loading: boolean
}

export function LoadingCardMovie({ quantity, loading }: LoadingCardMovieProp) {
  return (
    <>
      {
        loading ? (
          Array.from({ length: quantity }, (_, i) => i)
            .map(index => (
              <Col key={index}>
                <div className="loading-card-movie">
                  <div className="loading-card-movie__img loading" />
                  <div className="loading-card-movie__title loading" />
                </div>
              </Col>
            ))
        ): null
      }
    </>
  )
}