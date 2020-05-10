//
//  ViewController.swift
//  CameraApp
//
//  Created by yuzuru komiya on 2020/03/07.
//  Copyright © 2020 yuzuru komiya. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UINavigationControllerDelegate, UIImagePickerControllerDelegate {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }


    @IBOutlet weak var photoImage: UIImageView!
    
    @IBAction func canelaLaunchAction(_ sender: Any) {
        if UIImagePickerController.isSourceTypeAvailable(.camera) {
            print("Camera can be used.")
            let ipc = UIImagePickerController()
            ipc.sourceType = .camera
            ipc.delegate = self
            
            // present: 表示する
            present(ipc, animated: true, completion: nil)
        } else {
            print("Camera is not available.")
        }
    }
    
    @IBAction func shareAction(_ sender: Any) {
        if let sharedImage = photoImage.image {
            let sharedItems = [sharedImage]
            
            // シェアするアクティビティを保存するためのデータの入れ物を作る。
            let controller = UIActivityViewController(activityItems: sharedItems, applicationActivities: nil)
            // iPadら対応
            controller.popoverPresentationController?.sourceView = view
            // シェア用のさメニューを表示
            present(controller, animated: true, completion: nil)
        }
    }
    
    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
        photoImage.image = info[UIImagePickerController.InfoKey.originalImage] as? UIImage
        // 表示を消す
        dismiss(animated: true, completion: nil)
    }
}

