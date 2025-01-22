import Button from 'react-bootstrap/Button';

const ActionButton = ({variant, title, onClick}) => {
    return (
        <Button onClick={onClick} variant={variant}>{title}</Button>
    );
}

export default ActionButton;
