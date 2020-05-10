import UIKit

var str = "Hello, playground"

let json = "[{\"a\":\"1\"},{\"b\":\"2\"}]".data(using: .utf8)!
let params:[String:Any] = [
    "foo": "bar",
    "baz":[
        "a": 1,
        "b": 2,
        "x": 3]
]

let hoge = try JSONSerialization.data(withJSONObject: params, options: .prettyPrinted)

let urlString = "https://yahoo.co.jp"
let request = NSMutableURLRequest(url: URL(string: urlString)!)
request.httpBody = hoge

