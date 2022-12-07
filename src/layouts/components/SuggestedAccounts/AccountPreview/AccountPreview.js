import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import styles from './AccountPreview.module.scss'
import Button from '~/components/Button'
import Image from '~/components/Image'

const cx = classNames.bind(styles)

function AccountPreview() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Image
          className={cx('avatar')}
          src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6f742a138c51cf4c6ac049ea6f6ff6b4~c5_100x100.jpeg?x-expires=1667368800&x-signature=ZFnejMiic4ZgGPsBL4M4uKn04Mc%3D"
          alt=""
        />
        <Button className={cx('follow-btn')} primary>Following</Button>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>quocnguyenphu</strong>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <p className={cx('name')}>Quốc Nguyễn Phú</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Followers</span>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Likes</span>
        </p>
      </div>
    </div>
  )
}

export default AccountPreview
