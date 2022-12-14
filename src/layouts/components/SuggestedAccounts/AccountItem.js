import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind'

import Image from '~/components/Image'
import { Wrapper as PopperWrapper } from '~/components/Popper'
import AccountPreview from './AccountPreview'
import styles from './SuggestedAccounts.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    )
  }
  return (
    <div>
      <Tippy interactive delay={[500, 0]} placement="bottom" render={renderPreview} offset={[-20, 0]}>
        <div className={cx('account-item')}>
          <Image
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/6f742a138c51cf4c6ac049ea6f6ff6b4~c5_100x100.jpeg?x-expires=1667368800&x-signature=ZFnejMiic4ZgGPsBL4M4uKn04Mc%3D"
            alt=""
          />
          <div className={cx('item-info')}>
            <p className={cx('nickname')}>
              <strong>quocnguyenphu</strong>
              <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Quốc Nguyễn Phú</p>
          </div>
        </div>
      </Tippy>
    </div>
  )
}

export default AccountItem
