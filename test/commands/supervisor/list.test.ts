import { expect } from 'chai';
import nock from 'nock';
import { succeedCommand } from '../../helper.js';

describe('supervisor/list', () => {
	it('runs supervisor/list cmd', async () => {
		nock('http://localhost:8081')
			.post('/druid/v2/sql', {
				query: `
SELECT
  "supervisor_id" as "name",
  "type",
  "source",
  "detailed_state",
  "suspended" = 1 AS "suspended"
FROM "sys"."supervisors"
ORDER BY "supervisor_id"
`,
			})
			.reply(200, [
				{
					name: 'alerts',
					type: 'kafka',
					source: 'alerts',
					detailed_state: 'RUNNING',
					suspended: false,
				},
			]);

		const { result } = await succeedCommand(['supervisor', 'list']);

		expect(result).to.eql([
			{
				name: 'alerts',
				type: 'kafka',
				source: 'alerts',
				detailed_state: 'RUNNING',
				suspended: false,
			},
		]);
	});
});
