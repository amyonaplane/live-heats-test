interface InputProps {
    placeholder?: string
}

export default function Input({placeholder}: InputProps) {
    return(
        <>
        <input className="bg-grey-100" placeholder={placeholder} />
        </>
    )
}