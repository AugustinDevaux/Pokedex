import './button.css'

const Button = ({onClick, children, disabled, color}) => (
    <span className={` 
        button 
        button-${color}
        ${disabled ? "button-disabled" : ""} 
    `}
      onClick={() => {
        if (disabled) return;
        onClick();
      }}
    >
        {children}
    </span>
  )

  export default Button;