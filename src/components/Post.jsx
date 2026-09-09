export default function Post({ post }) {
  return (
    <article className="post-card">

      <div className="post-header">

        <div className="post-avatar">
          ?
        </div>


        <div className="post-author">

          <strong>
            {post?.user?.name}
          </strong>

          <span>
            {post?.user?.role}
          </span>

          <small>
            {post?.createdAt}
          </small>

        </div>


        <button className="post-more">
          •••
        </button>

      </div>


      <div className="post-content">

        <p>
          {post?.content}
        </p>


        {post?.image && (
          <img
            src={post.image}
            alt=""
            className="post-image"
          />
        )}

      </div>


      <div className="post-stats">

        <span>
          ♡ {post?.likes || 0} likes
        </span>

        <span>
          {post?.comments || 0} comments
        </span>

      </div>


      <div className="post-actions">

        <button>
          ♡
          <span>Like</span>
        </button>

        <button>
          ✐
          <span>Comment</span>
        </button>

        <button>
          「」
          <span>Repost</span>
        </button>

        <button>
          ↗
          <span>Share</span>
        </button>

        <button>
          ☆
          <span>Save</span>
        </button>

      </div>

    </article>
  );
}