const Card = ({children, className = ''}) => {
    return (
        <div className={`bg-white shadow rounded-lg h-36 ${className}`}>
            {children}
        </div>
    )
}

export default Card