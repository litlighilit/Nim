/* Generated by the Nim Compiler v1.9.3 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;

function toJSStr(s_33556923) {
  var result_33556924 = null;

    var res_33556965 = newSeq_33556941((s_33556923).length);
    var i_33556966 = 0;
    var j_33556967 = 0;
    Label1: {
        Label2: while (true) {
        if (!(i_33556966 < (s_33556923).length)) break Label2;
          var c_33556968 = s_33556923[i_33556966];
          if ((c_33556968 < 128)) {
          res_33556965[j_33556967] = String.fromCharCode(c_33556968);
          i_33556966 += 1;
          }
          else {
            var helper_33556981 = newSeq_33556941(0);
            Label3: {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556982 = c_33556968.toString(16);
                  if ((((code_33556982) == null ? 0 : (code_33556982).length) == 1)) {
                  helper_33556981.push("%0");;
                  }
                  else {
                  helper_33556981.push("%");;
                  }
                  
                  helper_33556981.push(code_33556982);;
                  i_33556966 += 1;
                  if ((((s_33556923).length <= i_33556966) || (s_33556923[i_33556966] < 128))) {
                  break Label3;
                  }
                  
                  c_33556968 = s_33556923[i_33556966];
                }
            };
++excHandler;
            try {
            res_33556965[j_33556967] = decodeURIComponent(helper_33556981.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            res_33556965[j_33556967] = helper_33556981.join("");
            lastJSError = prevJSError;
            } finally {
            }
          }
          
          j_33556967 += 1;
        }
    };
    if (res_33556965.length < j_33556967) { for (var i = res_33556965.length ; i < j_33556967 ; ++i) res_33556965.push(null); }
               else { res_33556965.length = j_33556967; };
    result_33556924 = res_33556965.join("");

  return result_33556924;

}

function rawEcho() {
          var buf = "";
      for (var i = 0; i < arguments.length; ++i) {
        buf += toJSStr(arguments[i]);
      }
      console.log(buf);
    

  
}
var F = {procname: "module jsbigints", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsbigints.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsbigints", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/jsbigints.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/jsutils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsutils", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/jsutils.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jscore.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function newSeq_33556941(len_33556943) {
  var result_33556944 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 608;
    F.filename = "system.nim";
    result_33556944 = new Array(len_33556943); for (var i = 0 ; i < len_33556943 ; ++i) { result_33556944[i] = null; }  framePtr = F.prev;

  return result_33556944;

}

function HEX3Aanonymous_654311427() {
  var F = {procname: "jscore_examples_3.:anonymous", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_3.nim", line: 0};
  framePtr = F;
    F.line = 153;
    F.filename = "jscore.nim";
    rawEcho([77,105,99,114,111,116,97,115,107]);
  framePtr = F.prev;

  
}
var F = {procname: "module jscore_examples_3", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_3.nim", line: 0};
framePtr = F;
F.line = 153;
F.filename = "jscore.nim";
queueMicrotask(HEX3Aanonymous_654311427);
framePtr = F.prev;
var F = {procname: "module jscore_examples_3", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_examples_3.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore_group1_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_group1_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jscore_group1_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jscore_group1_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
