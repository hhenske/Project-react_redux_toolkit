import { useDispatch } from "react-redux";
import { reactionsAdded } from "./postsSlice";

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionsButtons = ({ post }) => {
    const dispatch = useDispatch();

    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
            key={name}
            type="button"
            className="reactionButton"
            onClick={() =>
                dispatch(reactionsAdded({ postId: post.id, reaction: name}))
            }
            >
            {emoji} {post.reactions[name]}
                </button>
        )
    });

    return <div>{reactionButtons}</div>

    }

    export default ReactionsButtons;
