import type {FC} from 'react';
import React from 'react';
import {connect} from 'alita';
import {Button} from "antd-mobile";

interface LifePageProps {
    global: {
        name: string;
        counter: number;
        list: number[];
    };
}

const HomePage: FC<LifePageProps> = ({global, dispatch}) => {
    const {name, counter} = global;

    const handleClick = () => {
        dispatch({type: 'global/add', playload: {counter}});
    }

    return (
        <div>
            {name}
            <div>
                {counter}
            </div>
            <Button onClick={handleClick}>计数器</Button>
            {
                global.list.map((item, index) => {
                    return <div key={item}>{item}</div>
                })
            }
        </div>
    )
};

export default connect(({global}: LifePageProps) => ({global}))(HomePage);
