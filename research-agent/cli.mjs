#!/usr/bin/env node
import {research,formatAnswer} from './index.mjs';
const question=process.argv.slice(2).join(' ').trim();
if (!question) {console.error('Usage: node research-agent/cli.mjs "What changed in ..."');process.exitCode=2;}
else {
 try {
  const result=await research(question);
  console.log(formatAnswer(result));
  console.log('\nProvenance warning:',result.limitations||result.caveats);
 } catch(error) {
  console.error('Research unavailable:',error.message);process.exitCode=1;
 }
}
