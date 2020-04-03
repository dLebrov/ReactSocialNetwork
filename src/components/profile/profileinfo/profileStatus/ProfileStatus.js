import React from 'react';
import s from './profileStatus.module.css';
import Preloader from "../../../common/preloader/preloader";
import user from '../../../img/user.png'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus (this.state.status);
    }
    deactivateEditModeEnter = (enter) => {
        if (enter.charCode === 13){
        this.setState({
            editMode: false
        })
        this.props.updateStatus (this.state.status)
        }
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>

                {!this.state.editMode &&
                    <div>

                        <span onClick={this.activateEditMode}>{ "Статус: " + this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        Статус:
                        <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status} onKeyPress={this.deactivateEditModeEnter} /> <button  onClick={this.deactivateEditMode}>Сохранить</button>
                    </div>
                }
            </div>
        )
    }
}
export default ProfileStatus;