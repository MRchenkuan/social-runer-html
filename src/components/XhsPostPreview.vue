<template>
  <a-drawer
    :visible="visible"
    :width="500"
    @cancel="handleClose"
    unmountOnClose
  >
    <template #title>
      <xhs-logo />
    </template>
    
    <div class="xhs-post">
      <div class="image-slider">
        <a-carousel :auto-play="false">
          <a-carousel-item v-for="(image, index) in images" :key="index">
            <img :src="image" :alt="`图片 ${index + 1}`" />
          </a-carousel-item>
        </a-carousel>
        <div class="image-indicator">{{ currentIndex }}/{{ images.length }}</div>
      </div>
      
      <div class="post-content">
        <div class="post-title">{{ title }}</div>
        <div class="post-text">{{ content }}</div>
        
        <div class="post-tags">
          <a-tag v-for="tag in tags" :key="tag" color="arcoblue" bordered>
            #{{ tag }}
          </a-tag>
        </div>
        
        <div class="post-meta">
          <span class="location">{{ location }}</span>
          <span class="time">{{ time }}</span>
        </div>
      </div>
      
      <div class="post-comments">
        <div class="comments-header">
          <span class="comments-count">{{ comments.length }}条评论</span>
        </div>
        
        <div class="comment-list">
          <div v-for="comment in comments" :key="comment.id" class="comment-item">
            <div class="comment-avatar">
              <a-avatar :size="32" :src="comment.avatar">{{ comment.username.charAt(0) }}</a-avatar>
            </div>
            <div class="comment-content">
              <div class="comment-user">{{ comment.username }}</div>
              <div class="comment-text">{{ comment.content }}</div>
              <div class="comment-meta">
                <span class="comment-time">{{ comment.time }}</span>
                <span class="comment-location">{{ comment.location }}</span>
                <div class="comment-actions">
                  <a-space>
                    <a-button type="text" size="small">
                      <template #icon><icon-heart /></template>
                      {{ comment.likes }}
                    </a-button>
                    <a-button type="text" size="small">回复</a-button>
                  </a-space>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <a-space>
        <a-button @click="handleClose">取消</a-button>
        <a-button type="primary" @click="handleSave">保存</a-button>
      </a-space>
    </template>
  </a-drawer>
</template>

<script setup>
import { nextTick, ref } from 'vue'
import XhsLogo from '@/components/XhsLogo.vue'
import { 
  IconHeart, 
  IconStar, 
  IconMessage, 
  IconExport
} from '@arco-design/web-vue/es/icon'

const currentIndex = ref(1)
const visible = ref(false)
const images = ref([])
const title = ref('')
const content = ref('')
const tags = ref([])
const location = ref('')
const time = ref('')
const comments = ref([
  {
    id: 1,
    username: '小红薯爱生活',
    avatar: 'https://via.placeholder.com/40',
    content: '这个项目真的很有潜力，团队执行力很强！',
    time: '2024-02-28',
    location: '上海',
    likes: 12
  },
  {
    id: 2,
    username: '投资笔记本',
    avatar: 'https://via.placeholder.com/40',
    content: '我也关注这个项目很久了，确实不错',
    time: '2024-02-27',
    location: '北京',
    likes: 8
  },
  {
    id: 3,
    username: '创业观察员',
    avatar: 'https://via.placeholder.com/40',
    content: '最近他们的增长数据很漂亮，期待下一步发展',
    time: '2024-02-26',
    location: '深圳',
    likes: 15
  },
  {
    id: 4,
    username: '风投日记',
    avatar: 'https://via.placeholder.com/40',
    content: '产品迭代速度快，用户反馈也很好',
    time: '2024-02-25',
    location: '杭州',
    likes: 6
  }
])


// 外部方法
const open = (postData) => {
  nextTick(()=>{
    visible.value = true
    images.value = postData.images
    title.value = postData.title
    content.value = postData.content
    tags.value = postData.tags
    location.value = postData.location
    time.value = postData.time
  })
}

defineExpose({
  open
})

// 内部方法
const handleClose = () => {
  visible.value = false
}

const handleSave = () => {
  emit('save')
  handleClose()
}

const emit = defineEmits(['save'])
</script>

<style lang="less" scoped>
.xhs-post {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;

  .image-slider {
    position: relative;
    width: 100%;
    aspect-ratio: 4/3;
    background: #f5f5f5;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .image-indicator {
      position: absolute;
      right: 10px;
      bottom: 10px;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      padding: 2px 8px;
      border-radius: 10px;
      font-size: 12px;
    }
  }

  .post-content {
    padding: 16px;

    .post-title {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .post-text {
      font-size: 14px;
      color: #333;
      margin-bottom: 12px;
      line-height: 1.6;
    }

    .post-tags {
      margin-bottom: 12px;
      .arco-tag {
        margin-right: 8px;
        margin-bottom: 8px;
      }
    }

    .post-meta {
      font-size: 12px;
      color: #999;
      
      .location, .time {
        margin-right: 12px;
      }
    }
  }

  .post-comments {
    border-top: 1px solid #f0f0f0;
    padding: 16px;

    .comments-header {
      margin-bottom: 16px;
      
      .comments-count {
        font-size: 14px;
        color: #1d2129;
        font-weight: 500;
      }
    }

    .comment-list {
      .comment-item {
        display: flex;
        margin-bottom: 16px;

        .comment-avatar {
          margin-right: 12px;
        }

        .comment-content {
          flex: 1;

          .comment-user {
            font-size: 14px;
            font-weight: 500;
            color: #1d2129;
            margin-bottom: 4px;
          }

          .comment-text {
            font-size: 14px;
            color: #4e5969;
            margin-bottom: 8px;
            line-height: 1.6;
          }

          .comment-meta {
            display: flex;
            align-items: center;
            font-size: 12px;
            color: #86909c;

            .comment-time,
            .comment-location {
              margin-right: 12px;
            }

            .comment-actions {
              margin-left: auto;

              .arco-btn {
                color: #86909c;
                
                &:hover {
                  color: #165dff;
                }
              }
            }
          }
        }
      }
    }
  }
  .post-header {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid #f0f0f0;

    .xhs-icon {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }

    .header-title {
      font-size: 16px;
      font-weight: 500;
      color: #1d2129;
    }
  }
}
</style>