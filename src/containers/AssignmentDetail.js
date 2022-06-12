import React from 'react';
import { connect } from "react-redux";
import { Card } from 'antd';
import { getASNTSDetail } from "../store/actions/assignments";

class AssignmentDetail extends React.Component {
    componentDidMount() {
        if (this.props.token !== undefined && this.props.token !== null) {
            this.props.getASNTSDetail(this.props.token, this.props.match.params.id);
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.token !== this.props.token) {
            if (newProps.token !== undefined && newProps.token !== null) {
                this.props.getASNTSDetail(newProps.token, this.props.match.params.id);
            }
        }
    }

    render () {
        const { currentAssignment } = this.props;
        const { title } = currentAssignment;
        return (
            <Card title={title}>
                <Card type="inner" title="Inner Card title"> 
                Inner Card content
                </Card>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        currentAssignment: state.assignments.currentAssignment,
        loading: state.assignments.loading
    };
};
  
const mapDispatchToProps = dispatch => {
    return {
        getASNTSDetail: (token, id) => dispatch(getASNTSDetail(token, id))
    };
};
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AssignmentDetail);


 

