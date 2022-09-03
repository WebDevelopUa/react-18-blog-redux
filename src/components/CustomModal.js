import ReactDOM from 'react-dom';
import {Container} from 'semantic-ui-react';
import RemoteImage from "./RemoteImage";

const CustomModal = ({title, content, url, actions, onDismiss, show}) => {

    return ReactDOM.createPortal(<Container>
        <div className={`ui dimmer modals visible ${show ? 'active' : ''} `}
             onClick={onDismiss}>
            <div className={`ui standard modal visible active`}
                 onClick={event => event.stopPropagation()}>
                <i className="close icon"
                   onClick={onDismiss}/>
                <div className="header">
                    {title}
                </div>
                <div className="image content">
                    <div className="image">
                        <RemoteImage url={url} alt="cat"/>
                    </div>
                    <div className="description">
                        {content}
                    </div>
                </div>
                <div className="actions">
                    {actions}
                </div>
            </div>
        </div>
    </Container>, document.querySelector('#portal'));
}

export default CustomModal;
