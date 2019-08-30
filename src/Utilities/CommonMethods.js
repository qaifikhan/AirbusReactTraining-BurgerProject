export const dumpLogs = (...args) => {
    if(process.env.NODE_ENV === 'development') {
        //You can dump logs from here
        console.log(args);
    }
}