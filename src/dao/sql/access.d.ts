
///<reference path="../../../node_modules/@types/mysql/index.d.ts" />

// MySql连接器
interface MySqlAccessApi {
    // 连接
    connect: () => void;

    // 结束连接
    end: () => void;
}