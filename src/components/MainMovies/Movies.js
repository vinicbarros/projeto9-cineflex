import './Movies.css';

export default function Movies({movieURL}) {
    return (
        <div className="movie">
            <img src={movieURL} alt='Poster'/>
        </div>
    );
}