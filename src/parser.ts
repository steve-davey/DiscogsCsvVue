import {DiscogsClient} from "@lionralfs/discogs-client";
import {processReleaseData} from "@/components/ProcessReleaseData";
import Papa from "papaparse";

const db = new DiscogsClient().database();

export async function fetchRelease(releaseId: string): Promise<any[] | { error: string }> {
	try {
		const {data} = await db.getRelease(releaseId);
		return processReleaseData(releaseId, data);
	} catch (error) {
		return {
			error: `Release with ID ${releaseId} does not exist`
		};
	}
}

export async function parseCsvToArray(file: File): Promise<string[]> {
	return new Promise((resolve) => {
		Papa.parse<string[]>(file, {
			header: false,
			complete: (results: Papa.ParseResult<any>) => {
				console.log('Parsed: ', results.data);
				resolve(results.data);
			}
		});
	});
}