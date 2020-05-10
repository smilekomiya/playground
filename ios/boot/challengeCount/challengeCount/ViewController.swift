//
//  ViewController.swift
//  challengeCount
//
//  Created by yuzuru komiya on 2020/05/03.
//  Copyright © 2020 yuzuru komiya. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var countLabel: UILabel!
    var count: Int = 0
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    @IBAction func onTapPlus(_ sender: Any) {
        count = count + 1
        countLabel.text = String(count)
        if count >= 10 {
            countLabel.textColor = .red
        }
    }
    
    @IBAction func onTapMinus(_ sender: Any) {
        count = count - 1
        countLabel.text = String(count)
        if count < 10 {
            countLabel.textColor = .white
        }
    }
}

