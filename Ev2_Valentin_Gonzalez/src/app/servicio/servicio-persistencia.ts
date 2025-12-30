import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Cita } from '../modelo/cita';

@Injectable({
  providedIn: 'root'
})
export class ServicioPersistencia {
  
  private sqlite!: SQLiteConnection;
  private db!: SQLiteDBConnection;

  private platform: 'web' | 'ios' | 'android' | string = 'web';

  private readonly DB_NAME = 'citas_db';
  private readonly DB_VERSION = 1;

  private readonly DB_ENCRYPTED = false;
  private readonly DB_MODE = 'no-encryption';
  private readonly DB_READONLY = false;

  private readonly DB_TABLE = 'citas';
  private readonly SQL_CREATE = `
    CREATE TABLE IF NOT EXISTS citas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      frase TEXT NOT NULL,
      autor TEXT NOT NULL
    );
  `;

  constructor() {}

  async init(): Promise<void> {
    this.platform = Capacitor.getPlatform();
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
    if (this.platform === 'web') {
      await customElements.whenDefined('jeep-sqlite');
      await this.sqlite.initWebStore();
    }

    await this.abrirConexion();
    await this.db.execute(this.SQL_CREATE);
  }

  private async abrirConexion(): Promise<void> {
    const consistency = await this.sqlite.checkConnectionsConsistency();
    const isConn = await this.sqlite.isConnection(this.DB_NAME, this.DB_READONLY);

    if (consistency.result && isConn.result) {
      this.db = await this.sqlite.retrieveConnection(this.DB_NAME, this.DB_READONLY);
    } else {
      this.db = await this.sqlite.createConnection(
        this.DB_NAME,
        this.DB_ENCRYPTED,
        this.DB_MODE,
        this.DB_VERSION,
        this.DB_READONLY
      );
    }

    await this.db.open();
  }

  async getCitas(): Promise<Cita[]> {
    const sql = `SELECT id, frase, autor FROM ${this.DB_TABLE} ORDER BY id DESC;`;
    const res = await this.db.query(sql);
    return (res.values ?? []) as Cita[];
  }

  async agregarCita(cita: Pick<Cita, 'frase' | 'autor'>): Promise<void> {
    const sql = `INSERT INTO ${this.DB_TABLE} (frase, autor) VALUES (?, ?);`;
    await this.db.run(sql, [cita.frase, cita.autor]);
  }

  async borrarCitaPorId(id: number): Promise<void> {
    const sql = `DELETE FROM ${this.DB_TABLE} WHERE id = ?;`;
    await this.db.run(sql, [id]);
  }

  async borrarTodasLasCitas(): Promise<void> {
    const sql = `DELETE FROM ${this.DB_TABLE};`;
    await this.db.run(sql);
  }
}