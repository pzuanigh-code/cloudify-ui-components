import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import _ from 'lodash';
import Form from '../Form/Form';

export default {
    title: 'Form.File',
    component: Form.File
};

export const basic = () => (
    <Form>
        <Form.Field label="File">
            <Form.File name="file1" />
        </Form.Field>
    </Form>
);
export const noReset = () => (
    <Form>
        <Form.Field label="File">
            <Form.File name="file2" showReset={false} />
        </Form.Field>
    </Form>
);
export const button = () => (
    <Form.File
        name="file3"
        showInput={false}
        showReset={false}
        openButtonParams={{ className: 'rightFloated', content: 'Load File', labelPosition: 'left' }}
    />
);
export function controlled() {
    const [value, setValue] = useState();

    return (
        <>
            <Form.File
                name="file3"
                value={value ? `Selected file: ${value}` : ''}
                onChange={(file, fileName) => setValue(fileName)}
            />
            &nbsp;
            <Button onClick={_.ary(setValue, 0)}>Reset</Button>
        </>
    );
}
