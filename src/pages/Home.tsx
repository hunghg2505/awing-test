import React from 'react';
import './home.css';

const Home = () => {
  return (
    <>
      <div className='App'>
        <div className='menu'>
          <ul>
            <li className=''>
              {' '}
              <a href='/' aria-current='page' className='active'>
                Yêu cầu
              </a>{' '}
            </li>
            <li className=''>
              {' '}
              <a href='/demo'>Demo</a>{' '}
            </li>
          </ul>
        </div>
        <div className='App-intro'>
          <div className='requirement'>
            <h1>Yêu cầu</h1>
            <p style={{ marginTop: '-10px' }}>Ứng viên thực hiện làm bài test dưới đây:</p>
            <p className='label-level-1' style={{ color: 'red' }}>
              - Ưu tiên sử dụng Material UI để xây dựng giao diện
            </p>
            <p className='label-level-1' style={{ color: 'red' }}>
              - Hạn chế tối đa sử dụng thư viện khác hoặc giải pháp từ bên thứ 3
            </p>
            <h2>Viết 1 ứng dụng nhỏ bằng React</h2>
            <ul>
              <li>
                <strong>Viết một ứng dụng bằng React sử dụng Typescript gồm 2 tab như sau:</strong>
              </li>
              <li>
                <p className='label-level-1'>- Active tab tương ứng khi người dùng chọn</p>
              </li>
              <li>
                <p className='label-level-1'>
                  <strong>
                    <i>Tab thông tin:</i>
                  </strong>
                </p>
                <p className='label-level-2'>
                  - Các trường: Tên chiến dịch, Mô tả (bắt buộc nhập trường Tên chiến dịch){' '}
                </p>
              </li>
              <li>
                <p className='label-level-1'>
                  <strong>
                    <i>Tab Chiến dịch con:</i>
                  </strong>
                </p>
                <p className='label-level-2'>- Bao gồm một danh sách các chiến dịch con</p>
                <p className='label-level-2'>- Mặc định active Chiến dịch con 1 được tạo sẵn</p>
                <p className='label-level-2'>- Nút Add (+): </p>
                <p className='label-level-3'>- Để thêm mới một Chiến dịch con vào danh sách</p>
                <p className='label-level-3'>- Chiến dịch con mới mặc định chứa 1 quảng cáo</p>
                <p className='label-level-2'>- Một Chiến dịch con bao gồm: </p>
                <p className='label-level-3'>
                  - Thông tin chiến dịch con: Tên chiến dịch con, Trạng thái hoạt động (Bắt buộc
                  nhập trường Tên chiến dịch con)
                </p>
                <p className='label-level-3'>- Danh sách các quảng cáo của chiến dịch con</p>
                <p className='label-level-4'>- Một quảng cáo bao gồm:</p>
                <p className='label-level-5'>
                  - Thông tin quảng cáo: Tên quảng cáo, Số lượng (Bắt buộc nhập cả 2 trường, trường
                  Số lượng phải lớn hơn 0)
                </p>
                <p className='label-level-4'>- Nút Thêm (+):</p>
                <p className='label-level-5'>- Để thêm mới một quảng cáo vào danh sách</p>
                <p className='label-level-4'>
                  - Danh sách quảng cáo của một chiến dịch con phải lớn hơn 0
                </p>
                <p className='label-level-3'>
                  - Số lượng của chiến dịch con (số hiển thị ở dưới tên chiến dịch con trong demo)
                  bằng tổng số lượng của tất cả các quảng cáo
                </p>
              </li>
              <li>
                <p className='label-level-1'>
                  <strong>
                    <i>Validation</i>
                  </strong>{' '}
                  có 2 trường hợp:
                </p>
                <p className='label-level-2'>
                  <strong>Trường hợp 1:</strong> Khi chưa click nút submit
                </p>
                <p className='label-level-3'>Không hiển thị cảnh báo lỗi</p>
                <p className='label-level-2'>
                  <strong>Trường hợp 2:</strong> Đã click vào nút submit
                </p>
                <p className='label-level-3'>
                  Hiện cảnh báo lỗi cho tất cả các trường bắt buộc ở cả 2 Tab.
                </p>
                <p className='label-level-3'>
                  Hiện cảnh báo lỗi cho tất cả các chiến dịch con (Chuyển tên chiến dịch con bị lỗi
                  thành màu đỏ).
                </p>
              </li>
              <li>
                <p className='label-level-1'>
                  <strong>
                    <i>submit</i>
                  </strong>
                </p>
                <p className='label-level-2'>
                  - Toàn bộ thông tin trong hai tab hợp lệ (không có cảnh báo):{' '}
                  <strong>
                    <i>Thành công</i>
                  </strong>
                </p>
                <p className='label-level-2'>
                  - Ngược lại:{' '}
                  <strong>
                    <i>Vui lòng điền đúng và đầy đủ thông tin</i>
                  </strong>{' '}
                  và thực hiện validation với các trường bắt buộc nhập
                </p>
              </li>
              <li>
                <p className='label-level-1'>
                  <strong>
                    <i>Dữ liệu chiến dịch</i>
                  </strong>
                </p>
                <p className='label-level-2'>campaign: {'{'}</p>
                <p className='label-level-3'>information: {'{'}</p>
                <p className='label-level-4'>name: string</p>
                <p className='label-level-4'>describe?: string</p>
                <p className='label-level-3'>{'}'}</p>
                <p className='label-level-3'>subCampaigns: [{'{'}</p>
                <p className='label-level-4'>name: string</p>
                <p className='label-level-4'>status: boolean</p>
                <p className='label-level-4'>ads: [{'{'}</p>
                <p className='label-level-5'>name: string</p>
                <p className='label-level-5'>quantity: number</p>
                <p className='label-level-4'>{'}'}]</p>
                <p className='label-level-3'>{'}'}]</p>
                <p className='label-level-2'>{'}'}</p>
              </li>
              <li>
                <i className='label-level-1'>Ví dụ:</i>
              </li>
              <li>
                <p className='label-level-2'>
                  Tham khảo ứng dụng được tạo sẵn ở menu: <strong>Demo</strong>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
