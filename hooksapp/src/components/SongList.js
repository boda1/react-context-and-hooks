import React, { useState, useEffect } from 'react';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const { v1: uuid } = require('uuid');
    const [songs, setSongs] = useState([
        {   title: 'Everything in its right place', id: 1 },
        {   title: 'OK Computer', id: 2 },
        {   title: 'Subterranean homesick blues', id: 3 }
      ])
    const addSong = (title) => {
        setSongs([...songs, {title, id: uuid() }])
    }
    const [age, setAge] = useState(20);
    useEffect(() => {
        console.log("useEffect hook ran: ", songs);
    })
    const incrementAge = () => {
        setAge(age + 1);
    }
    return (
        <div className="song-list">
            <ul>
                {songs.map(song => {
                    return ( <li key={song.id}>{song.title}</li>)
                })}
            </ul>
            <button onClick={incrementAge}>Add one to age: {age}</button>
            <NewSongForm addSong={addSong}/>
        </div>
    );
}
 
export default SongList;