export interface DaocidiPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
