//
//  ViewController.swift
//  SunriseApp
//
//  Created by yuzuru komiya on 2020/03/07.
//  Copyright © 2020 yuzuru komiya. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var cityNameInput: UITextField!
    @IBOutlet weak var sunriseTimeLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }


    
    @IBAction func findSunrise(_ sender: Any) {
        let url = "https://api.openweathermap.org/data/2.5/weather?q=\(cityNameInput.text!)&APPID=df5299b6251fbeb9ee49d7e969935d31"
        getURL(url: url)
    }
    
    func getURL(url: String) {
        do {
            let apiURL = URL(string: url)!
            let data = try Data(contentsOf: apiURL)
            let json = try JSONSerialization.jsonObject(with: data) as! [String: Any]
            // print(json)
            let sys = json["sys"] as! [String: Any]
            let sunrise = sys["sunrise"] as! Double
            
            let date = NSDate(timeIntervalSince1970: sunrise)
            let dateFormatter = DateFormatter()
            dateFormatter.timeStyle = DateFormatter.Style.medium
            dateFormatter.dateStyle = DateFormatter.Style.medium
            dateFormatter.timeZone = TimeZone(identifier: "Asia/Tokyo")
            dateFormatter.locale = Locale(identifier: "ja_JP")
            let localDate = dateFormatter.string(from: date as Date)
            
            self.sunriseTimeLabel.text = "日の出時刻：　\(localDate)"
        } catch {
            self.sunriseTimeLabel.text = "サーバーに接続できません"
        }
    }
}

