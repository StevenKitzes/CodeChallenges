// from https://www.hackerrank.com/challenges/acm-icpc-team/problem

// Complete the acmTeam function below.
function acmTeam(topic) {
    topic = topic.map((item) => item.split(''));

    let max = 0;
    let count = 0;

    for (let i = 0; i < topic.length - 1; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            let overlap = 0;
            for (let k = 0; k < topic[0].length; k++) {
                if (topic[i][k] == 1 || topic[j][k] == 1) {
                    overlap++;
                }
            }
            if (overlap === max) {
                count++;
            }
            if (overlap > max) {
                max = overlap;
                count = 1;
            }
        }
    }

    return [max, count];
}
