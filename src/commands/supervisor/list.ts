import type { JsonStructure } from '@croct/json';
import { DruidCommand } from '../../base/druidCommand.js';

export default class SupervisorList extends DruidCommand {
	static override description = 'list supervisors';

	static override examples = ['<%= config.bin %> <%= command.id %>'];

	public async run(): Promise<JsonStructure> {
		const supervisors = await this.client.sql(`
SELECT
  "supervisor_id" as "name",
  "type",
  "source",
  "detailed_state",
  "suspended" = 1 AS "suspended"
FROM "sys"."supervisors"
ORDER BY "supervisor_id"
`);

		this.table(supervisors);
		return supervisors;
	}
}
