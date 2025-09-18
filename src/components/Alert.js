import React from 'react'

export default function Alert(props) {
  return (
    <div>
      { props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>{props.alert.type}</strong> : {props.alert.msge}
        </div>
}
    </div>
  )
}
