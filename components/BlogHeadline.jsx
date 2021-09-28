import { Col, Row } from "antd";

export default function BlogHeadline() {
    return (
        <Row align="middle"
        style={{
            height:400,
            textAlign:"center"
        }}>
            <Col span={24}>
                <h1 style={{
                    fontSize: 70,
                    fontWeight: 'bold'
                }}>Kuma's Blog</h1>
                <p style={{fontSize:24}}>
                    Vue와 React를 사용하여 웹 사이트를 만들며, DataScience를 통한 데이터 분석 및 머신러닝을 좋아합니다.
                    또한 DataScience를 통한 결과값을 Vue와 React를 통해 보여주는 것을 좋아하며, 대규모 자바스크립트
                    어플리케이션 개발에 대한 더 나은 방향을 고민하고 적용하기 위해서 노력하고 있습니다.
                    그리고 최신 웹 기술 및 머신러닝 기술에 흥미가많아 다양한 사람들과 얘기를 하는것을 좋아합니다. 
                </p>
            </Col>

        </Row>
    )
}