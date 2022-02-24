import React, { useRef, useState } from "react";
import styles from "./InlineEdit.module.css";

const InlineEdit = ({ className, value, onChange, ...props }) => {
  const [isEditing, setIsEditing] = useState(false);

  const fieldRef = useRef();

  const handleKeyDown = (evt) => {
    if (evt.key === "Escape" || evt.key === "Enter") {
      setIsEditing(false);
    }
  };

  React.useEffect(() => {
    if (isEditing) {
      fieldRef.current.focus();
    }
  }, [isEditing]);

  return (
    <div className={`${className}`}>
      {isEditing ? (
        <input
          ref={fieldRef}
          className={styles.field}
          onKeyDown={handleKeyDown}
          value={value}
          onChange={onChange}
          onBlur={() => setIsEditing(false)}
          {...props}
        />
      ) : (
        <span
          className={styles.label}
          role="button"
          tabIndex="0"
          onClick={() => setIsEditing(true)}
        >
          {value}
        </span>
      )}
    </div>
  );
};

export default InlineEdit;
