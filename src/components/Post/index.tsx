import styles from './Post.module.css';

import PostComments from '../PostComments';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

const Post = ({ children, imageUrl }: Props) => (
    <div className={styles.post}>
        <img data-testid='img-test' className={styles['post-image']} src={imageUrl} />
        <p data-testid='p-test' className={styles['post-text']}> {children} </p>
        <PostComments />
    </div>
);

export default Post;