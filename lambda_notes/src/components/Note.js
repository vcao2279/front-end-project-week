import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
    width: 192px;
    height: 195px;
    border: 1px solid black;
    margin: 1.2rem 1.12%;
    overflow: hidden;
`

const Note = props => {
    return (
        <Card>
            <h1>{props.note.title}</h1>
            <p>{props.note.textBody}</p>
        </Card>
    )
}

Note.propTypes = PropTypes.shape({
    "tags": PropTypes.string.isRequired,
    "_id": PropTypes.string.isRequired,
    "title": PropTypes.string.isRequired,
    "textBody": PropTypes.string.isRequired,
    "__v": PropTypes.number.isRequired,
}).isRequired

export default Note;