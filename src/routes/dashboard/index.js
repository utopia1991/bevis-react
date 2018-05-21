import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { Row, Col } from 'antd'
import { Page } from 'components'
import { NumberCard } from './components'
import styles from './index.less'

function Dashboard ({ dashboard, loading }) {
  const {
    numbers,
  } = dashboard
  const numberCards = numbers.map((item, key) => (<Col key={key} lg={6} md={12}>
    <NumberCard {...item} />
  </Col>))

  return (
    <Page loading={loading.models.dashboard} className={styles.dashboard}>
      <Row gutter={24}>
        {numberCards}
      </Row>
    </Page>
  )
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
  loading: PropTypes.object,
}

export default connect(({ dashboard, loading }) => ({ dashboard, loading }))(Dashboard)
