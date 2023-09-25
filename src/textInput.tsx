import React, { useEffect, useState } from "react";

export interface IPlayer {
    name: string;
    age: number;
}

export interface TextInputProps {
    text: string;
    isValidated?: boolean;
    age?: number;
    fn?: () => void;
}

const TextInput: React.FC<TextInputProps> = ({ text }) => {
    const [player, setPlayer] = useState<IPlayer>({ name: "Radek", age: 33 });
    useEffect(() => {
        setPlayer({ name: "Amit", age: 33 });
    }, []);
    return (
        <div>
            <input value={text} />
            <br />
            {player.name}
            <br />
            {player.age}
        </div>
    );
};

export default TextInput;
