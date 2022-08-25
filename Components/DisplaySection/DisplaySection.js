
import styles from "./DisplaySection.module.css"

export const DisplaySection = ({children}) => {

    return (
        <div className= {styles.container}>
            {children}
        </div>
    )
}
