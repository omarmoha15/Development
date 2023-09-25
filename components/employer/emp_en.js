import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import CIcon from '@coreui/icons-react';
import { cilPrint } from '@coreui/icons';
import {
  PDFDownloadLink,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  style,
  Font,
} from '@react-pdf/renderer'
import { CButton } from '@coreui/react'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import Backgroundimage from '../../public/assets/images/v16_150.png'
import Logoimage from '../../public/assets/images/v16_193.png'
import sign1 from '../../public/assets/images/v25_2.png'
import sign2 from '../../public/assets/images/v25_3.png'
import sign3 from '../../public/assets/images/v21_2.png'
Font.register({
  family: 'Lateef',
  src: 'https://cdn.jsdelivr.net/npm/@expo-google-fonts/lateef@0.2.0/Lateef_400Regular.ttf',
})

const Emp_en = (props) => {
  const [message, setMessage] = useState('')
  const [user, setUser] = useState('')
  const [sal, setSal] = useState('')
  const [tbounus, settbonus] = useState('')
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch('http://10.0.0.216:8000/api/emp', {
          credentials: 'include',
        })

        const content = await response.json()

        setUser(content)
        setAuth(true)
      } catch (e) {
        setMessage('You are not logged in')
        setAuth(false)
      }
    })()
  })

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch('http://10.0.0.216:8000/api/sal', {
          credentials: 'include',
        })

        const salary = await response.json()

        setSal(salary)
        setAuth(true)
      } catch (e) {
        setMessage('You are not logged in')
        setAuth(false)
      }
    })()
  })

  const createPDF = async () => {
    const pdf = new jsPDF('portrait', 'pt', 'a4')
    const data = await html2canvas(document.querySelector('#pdf'))
    const img = data.toDataURL('image/jpg')
    const imgProperties = pdf.getImageProperties(img)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width
    pdf.addImage(img, 'JPG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('شهادة تعريف راتب.pdf')
  }
  // boxSizing: 'border-box',
  // width: '712px',
  // height: '1057px',
  // background: 'url(${Backround} center center / cover no-repeat',
  // padding: '20px 14px',
  // opacity: 1,
  // position: 'relative',
  // top: '0px',
  // left: '0px',
  // overflow: 'hidden',
  return (
    // eslint-disable-next-line react/no-unknown-property
    <div className="layout" auth={auth}>
 
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
      
        <br /> <br /> <br />
        <CButton
          className="px-2"
          color="success"
          style={{ backgroundColor: '#43bf6c', color: '#fff' }}
          onClick={createPDF}
          type="button"
        >  <CIcon icon={cilPrint} size="xl" />
        </CButton>
        <br />
        <div className={{ boxSizing: 'border-box', fontSize: '14px', direction: 'ltr' }}>
          <div
            style={{
              boxSizing: 'border-box',
              width: '749px',
              height: '1200px',
              padding: '20px 14px',
              opacity: 1,
              right: '200px',
              position: 'relative',
              top: '0px',
              left: '0px',
              overflow: 'hidden',
            }}
            id="pdf"
          >
            <Image src={Backgroundimage} alt="Logo" style={{ width: '725px' }} />
            <div
              style={{
                boxSizing: 'border-box',
                width: '701px',
                height: '44px',
                background: 'rgba(60, 193, 137, 0.25)',
                opacity: 1,
                position: 'absolute',
                top: '162px',
                left: '28px',
                border: '1px solid rgba(0, 0, 0, 0.29)',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            />
            <span
              style={{
                boxSizing: 'border-box',
                width: '124px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '165px',
                left: '290px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              SALARY CERTIFICATE
            </span>
            {/* [ بداية البيانات الوظيفية ]*/}
            {/* [ مربع حقول البيانات الوظيفية ]*/}
            <div
              style={{
                boxSizing: 'border-box',
                width: '704px',
                height: '353px',
                background: 'rgba(238, 238, 238, 0.48)',
                opacity: 1,
                position: 'absolute',
                top: '229px',
                left: '29px',
                border: '1px solid rgba(0, 0, 0, 0.26)',
                borderRadius: '10px',
                boxShadow: 'rgba(0, 0, 0, 0.13) 0px 1px 8px',
                overflow: 'hidden',
              }}
            />
            {/* [ مربع حقول البيانات الوظيفية ]*/}
            {/* [ بداية مسميات الحقول  ]*/}
            <span
              style={{
                boxSizing: 'border-box',
                width: '46px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '248px',
                left: '628px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              NAME
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '53px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '302px',
                left: '626px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              Level
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '56px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '303px',
                left: '306px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              Grade
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '65px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '357px',
                left: '615px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              Designation
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '111px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '416px',
                left: '249px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              Basic Salary
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '84px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '246px',
                left: '275px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              ID Number
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '73px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '469px',
                left: '606px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              Transport allowance
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '88px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '468px',
                left: '270px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              Deduction
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '56px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '527px',
                left: '622px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              allowance
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '98px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '526px',
                left: '261px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              onther deduction
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '47px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '420px',
                left: '630px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              Department
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '100px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '357px',
                left: '259px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              date of join on the ministry
            </span>
            {/* [ نهاية مسميات الحقول  ]*/}
            {/* [ بداية متغيرات الحقول ]*/}
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '248px',
                left: '385px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              {user.fullnamear}
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '249px',
                left: '41px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              {user.emp_no}
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '304px',
                left: '385px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              {user.empjobrank}
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '305px',
                left: '41px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              {user.empjobgrade}
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '360px',
                left: '385px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              {user.empjobtitle}
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '361px',
                left: '41px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              {user.govemploymentdt}
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '528px',
                left: '385px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              لايوجد
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '529px',
                left: '41px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              لايوجد
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '416px',
                left: '385px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              (لايوجد)
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '417px',
                left: '41px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              {sal.basicsalary}
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '472px',
                left: '385px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              {sal.badal1}
            </div>
            <div
              style={{
                boxSizing: 'border-box',
                width: '208px',
                height: '35px',
                opacity: 1,
                position: 'absolute',
                top: '473px',
                left: '41px',
                border: '1px solid rgb(0, 0, 0)',
                borderRadius: '9px',
                overflow: 'hidden',
              }}
            >
              {(sal.basicsalary * 9) / 100}
            </div>
            {/* [ نهاية متغيرات الحقول ]*/}
            {/* [ نهاية البيانات الوظيفية ]*/}
            {/* [ بداية نص الشهادة  ]*/}
            <span
              style={{
                boxSizing: 'border-box',
                width: '661px',
                color: 'rgb(13, 17, 15)',
                position: 'absolute',
                top: '590px',
                left: '25px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '14px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              The General Administration of Human Resources in the Emirate of Asir Region certifies
              that the employee whose name and data are shown above is one of its employees and is
              still at work to date and upon his request this scene was given to be presented to
              whom it may concern, and God grant success
            </span>
            {/* [ نهاية نص الشهادة  ]*/}
            {/* [ بداية التواقيع  ]*/}
            <span
              style={{
                boxSizing: 'border-box',
                width: '129px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '690px',
                left: '535px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              Director, Division of salarie{' '}
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '130px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '758px',
                left: '538px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              Ahmed Zaher Al Meshari
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '187px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '690px',
                left: '35px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              HR Director{' '}
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '120px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '758px',
                left: '72px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              Ahmed Faye Alalmaei
            </span>
            <Image
              src={sign3}
              alt="Logo"
              style={{
                height: '112px',
                width: '120px',
                top: '689px',
                left: '317px',
                position: 'absolute',
                fontSize: '16px',
              }}
            />
            <div
              style={{
                boxSizing: 'border-box',
                width: '120px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '758px',
                left: '72px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            />
            <div
              style={{
                boxSizing: 'border-box',
                width: '127px',
                height: '49px',
                backgroundImage: `url(${sign1}) `,
                opacity: 1,
                position: 'absolute',
                top: '708px',
                left: '73px',
                overflow: 'hidden',
              }}
            />
            <Image
              src={sign1}
              alt="Logo"
              style={{ width: '112px', top: '708px', left: '73px', position: 'absolute' }}
            />
            <div
              style={{
                boxSizing: 'border-box',
                width: '109px',
                height: '63px',
                opacity: 1,
                position: 'absolute',
                top: '709px',
                left: '556px',
                overflow: 'hidden',
              }}
            />
            <Image
              src={sign2}
              alt="Logo"
              style={{
                height: '63px',
                width: '109px',
                top: '709px',
                left: '544px',
                position: 'absolute',
              }}
            />
            {/* [ توقيع مدير الرواتب  ]*/}
            {/* [ نهاية التواقيع  ]*/}
            {/* [ بداية الترويسة  ]*/}
            {/* [ مربع الترويسة  ]*/}
            <div
              style={{
                boxSizing: 'border-box',
                width: '704px',
                height: '122px',
                background: 'rgba(238, 238, 238, 0.44)',
                opacity: 1,
                position: 'absolute',
                top: '18px',
                left: '27px',
                border: '1px solid rgba(0, 0, 0, 0.17)',
                borderRadius: '10px',
                boxShadow: 'rgba(0, 0, 0, 0.13) 0px 1px 8px',
                overflow: 'hidden',
              }}
            />
            {/* [ مربع الترويسة  ]*/}
            {/* [ logo  ]*/}
            <div
              style={{
                boxSizing: 'border-box',
                width: '85px',
                height: '109px',
                opacity: 1,
                position: 'absolute',
                top: '24px',
                left: '315px',
                overflow: 'hidden',
              }}
            />
            <Image
              src={Logoimage}
              alt="Logo"
              style={{ width: '85px', top: '24px', left: '315px', position: 'absolute' }}
            />
            <span
              style={{
                boxSizing: 'border-box',
                width: '150px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '35px',
                left: '509px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '14px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              المملكة العربية السعودية{' '}
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '150px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '65px',
                left: '509px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '14px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              وزارة الداخلية
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: '150px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '95px',
                left: '509px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '14px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              إمارة منطقة عسير
            </span>
            {/* [ متغيرات بيانات الوثيقة  ]*/}
            <span
              style={{
                boxSizing: 'border-box',
                width: 'auto',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '36px',
                left: '138px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '14px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              التاريخ []{' '}
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: 'auto',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '65px',
                left: '138px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '14px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              الرقم المرجعي []{' '}
            </span>
            <span
              style={{
                boxSizing: 'border-box',
                width: 'auto',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '95px',
                left: '138px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '14px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              المصدر []{' '}
            </span>
            {/* [ نهاية الترويسة  ]*/}
            {/* [ بداية التحقق  ]*/}
            {/* [ بداية نص التحقق   ]*/}
            <div
              style={{
                boxSizing: 'border-box',
                width: '357px',
                height: '64px',
                background: 'rgba(221, 221, 221, 0.71)',
                opacity: 1,
                position: 'absolute',
                top: '1024px',
                left: '330px',
                borderRadius: '8px',
                border: '1px solid rgb(139, 139, 139)',
              }}
            />
            <span
              style={{
                boxSizing: 'border-box',
                width: '334px',
                color: 'rgb(3, 2, 43)',
                position: 'absolute',
                top: '1031px',
                left: '342px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '13px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              This document is signed and stamped by the system and does not require a signature or
              stamp to verify the document from the link: verify.aseer.gov.sa{' '}
            </span>
            {/* [ نهاية نص التحقق   ]*/}
            {/* [ بداية qr  ]*/}
            <div
              style={{
                boxSizing: 'border-box',
                width: '68px',
                height: '64px',
                background: 'rgba(231, 231, 231, 0.74)',
                opacity: 1,
                position: 'absolute',
                top: '1024px',
                left: '25px',
                border: '1px solid rgb(139, 139, 139)',
                borderRadius: '8px',
              }}
            />
            <span
              style={{
                boxSizing: 'border-box',
                width: '43px',
                color: 'rgb(0, 0, 0)',
                position: 'absolute',
                top: '1039px',
                left: '36px',
                fontFamily: 'SST Arabic',
                fontWeight: 'bold',
                fontSize: '16px',
                opacity: 1,
                textAlign: 'center',
              }}
            >
              QR
            </span>
            {/* [ نهاية qr  ]*/}
            {/* [ نهاية التحقق  ]*/}
          </div>
        </div>
      </div>


    </div>
  )
}

export default Emp_en
