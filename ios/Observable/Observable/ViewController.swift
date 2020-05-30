//
//  ViewController.swift
//  Observable
//
//  Created by yuzuru komiya on 2020/05/30.
//  Copyright © 2020 yuzuru komiya. All rights reserved.
//

import UIKit
import RxSwift
import RxCocoa

class ViewController: UIViewController {

    @IBOutlet weak var button: UIButton!
    @IBOutlet weak var label: UILabel!
    
    private let count: BehaviorRelay<Int> = BehaviorRelay(value: 0)
    private let disposeBag: DisposeBag = DisposeBag()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        bindButtonToValue()
        bindCountToText()
    }
    
    private func bindButtonToValue() {
        // rx.tapはボタンがタップされることが監視されるObservableを返す。
        button.rx.tap
            // 監視対象のtapをObserveする
            // UIイベントなので変数を媒体する必要がない＝Relayを使わない。
            .subscribe(onNext: { [weak self] _ in
                self?.increment()})
            .disposed(by: disposeBag)
    }
    
    private func increment() {
        count.accept(count.value + 1)
    }
    
    // 変数を購読する
    private func bindCountToText() {
        // 変数countの値の変化を監視する。
        count.asObservable() // ObServable<Int> が返る
            // 値が変化した際の処理を行う。
            .subscribe(onNext: { [weak self] count in
                self?.label.text = String(count) }) // Disposableが返る。subscribeすると返却される。
            // viewがdeinitされる→disposeBagが破棄→購読も破棄
            .disposed(by: disposeBag)
    }


}

