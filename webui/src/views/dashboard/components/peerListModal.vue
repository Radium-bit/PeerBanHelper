<template>
  <a-modal
    v-model:visible="visible"
    hide-cancel
    closable
    unmount-on-close
    width="auto"
    @ok="handleOk"
    @close="cancel()"
  >
    <template #title> {{ t('page.dashboard.peerList.title') + tname }} </template>
    <a-table
      :columns="columns"
      :data="data?.data"
      :loading="!loading && !data"
      :virtual-list-props="{ height: 500 }"
      :pagination="false"
    >
      <template #peerAddress="{ record }">
        <a-typography-text copyable code>
          <countryFlag
            v-if="record.geo && record.geo.countryRegion"
            :iso="record.geo.countryRegion"
          />
          {{ record.peer.address.ip }}
        </a-typography-text>
      </template>
      <template #speed="{ record }">
        <a-space fill style="justify-content: space-between">
          <a-space fill direction="vertical">
            <a-typography-text>
              <icon-arrow-up class="green" />
              {{ formatFileSize(record.peer.uploadSpeed) }}/s
            </a-typography-text>
            <a-typography-text>
              <icon-arrow-down class="red" />
              {{ formatFileSize(record.peer.downloadSpeed) }}/s
            </a-typography-text>
          </a-space>
        </a-space>
      </template>
      <template #uploadDownload="{ record }">
        <a-space fill style="justify-content: space-between">
          <a-space fill direction="vertical">
            <a-typography-text
              ><icon-arrow-up class="green" />
              {{ formatFileSize(record.peer.uploaded) }}</a-typography-text
            >
            <a-typography-text
              ><icon-arrow-down class="red" />
              {{ formatFileSize(record.peer.downloaded) }}</a-typography-text
            >
          </a-space>
        </a-space>
      </template>
      <template #progress="{ record }">
        <a-space>
          <a-progress :percent="record.peer.progress" size="mini" />
          <a-typography-text>
            {{ (record.peer.progress * 100).toFixed(2) + '%' }}
          </a-typography-text>
        </a-space>
      </template>
      <template #flags="{ record }">
        <p>
          {{ record.peer.flags }}
          <a-tooltip v-if="record.peer.flags">
            <template #content>
              <p v-for="description in parseFlags(record.peer.flags)" :key="description">
                {{ description }}
              </p>
            </template>
            <icon-info-circle />
          </a-tooltip>
        </p>
      </template>
    </a-table>
  </a-modal>
</template>
<script setup lang="ts">
import { getPeer } from '@/service/downloaders'
import { formatFileSize } from '@/utils/file'
import countryFlag from '@/views/banlist/components/countryFlag.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRequest } from 'vue-request'
const { t } = useI18n()
const visible = ref(false)
const downloader = ref('')
const tid = ref('')
const tname = ref('')
defineExpose({
  showModal: (downloaderName: string, torrentId: string, torrentName: string) => {
    downloader.value = downloaderName
    tid.value = torrentId
    tname.value = torrentName
    visible.value = true
    run(downloaderName, torrentId)
  }
})
const handleOk = () => {
  visible.value = false
  downloader.value = ''
  tid.value = ''
}
const { data, loading, run, cancel } = useRequest(getPeer, {
  defaultParams: [downloader.value, tid.value],
  manual: true,
  pollingInterval: 1000
})
const columns = [
  {
    title: () => t('page.dashboard.peerList.column.address'),
    slotName: 'peerAddress',
    width: 330
  },
  {
    title: () => t('page.dashboard.peerList.column.port'),
    dataIndex: 'peer.address.port'
  },
  {
    title: () => t('page.dashboard.peerList.column.flag'),
    slotName: 'flags'
  },
  {
    title: 'Peer ID',
    dataIndex: 'peer.id'
  },
  {
    title: () => t('page.dashboard.peerList.column.clientName'),
    dataIndex: 'peer.clientName'
  },
  {
    title: () => t('page.dashboard.peerList.column.speed'),
    slotName: 'speed'
  },
  {
    title: () => t('page.dashboard.peerList.column.uploadedDownloaded'),
    slotName: 'uploadDownload'
  },
  {
    title: () => t('page.dashboard.peerList.column.progress'),
    slotName: 'progress'
  }
]
const parseFlags = (flags: string) =>
  flags
    .split(' ')
    .map((flag) => flag + ' - ' + t('page.dashboard.peerList.column.flags.' + flag.trim()))
</script>

<style scoped>
.red {
  color: rgb(var(--red-5));
}

.green {
  color: rgb(var(--green-5));
}
</style>
