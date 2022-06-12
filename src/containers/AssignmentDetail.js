import React from 'react';
import { connect } from "react-redux";
import { Card, Skeleton } from 'antd';
import Questions from "./Questions";
import { getASNTSDetail } from "../store/actions/assignments";
import Hoc from "../hoc/hoc";

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
            <Hoc>
            {Object.keys(currentAssignment).length > 0 ? (
                <Hoc>
                    {this.props.loading ? (
                        <Skeleton active />
                ) : (
                    <Card title={title}>
                        <Questions 
                            questions={currentAssignment.questions.map(q => {
                                return (
                                <Card 
                                type="inner" 
                                key={q.id} 
                                title={`${q.order}. ${q.question}`} 
                                />
                                )
                            })}
                            />
                        </Card>
                   
                )}
            </Hoc>
            ) : null}
           </Hoc>
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


 

