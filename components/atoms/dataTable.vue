<template>
  <NDataTable
    remote
    :data="props.data"
    :columns="props.columns"
    :row-props="rowProps"
  />
</template>

<script setup lang="ts">
import type { DataTableColumns } from 'naive-ui'
import type { RowData } from 'naive-ui/es/data-table/src/interface'
import type { HTMLAttributes } from 'vue'
import type { User } from '~/types/user'

interface Props {
  data: RowData[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: DataTableColumns<any>
}
interface Emits {
  (event: 'select', row: RowData): void
}

const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const rowProps: (row: User) => HTMLAttributes = row => ({
  style: {
    cursor: 'pointer',
  },
  onClick: () => emit('select', row),
})
</script>
