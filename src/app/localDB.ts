interface TableSheet {
  [key: string]: any
}
class DBTable<T extends TableSheet> {
  private db_path: string
  private data: T[]
  constructor(db_path: string) {
    this.db_path = db_path
    this.data = this.load()
  }
  insert(record: T): this {
    this.data.push(record)
    return this
  }
  insertUnique(uniqueField: keyof T, record: T): this {
    if (!this.data.find((e) => e[uniqueField] === record[uniqueField])) {
      this.data.push(record)
    }
    return this
  }
  private load(): T[] {
    const jsonText = localStorage.getItem(this.db_path) || '[]'
    const data = JSON.parse(jsonText) as T[]
    return data
  }
  /**
   * Commits change to local storage
   * @returns table
   */
  commit(): this {
    localStorage.setItem(this.db_path, JSON.stringify(this.data))
    return this
  }
  rollback(): this {
    this.data = this.load()
    return this
  }
  drop(): this {
    this.data = []
    localStorage.setItem(this.db_path, '[]')
    return this
  }
  select(filter: Partial<T> = {}): T[] {
    const filterKeys = Object.keys(filter)
    return this.data.filter((value) => {
      return filterKeys.every((key) => filter[key] === value[key])
    })
  }
  findUnique<K extends keyof T>(uniqueField: K, value: Pick<T, K>[K]): T | undefined {
    return this.data.find((e) => e[uniqueField] === value)
  }
}
export default class LocalDatabase {
  static prefix: string = 'db_'
  static appName: string = 'manga'
  static createDatabase<T extends TableSheet = {}>(tableName: string) {
    const db_path = `${this.prefix}${this.appName}_${tableName}`
    return new DBTable<T>(db_path)
  }
}
