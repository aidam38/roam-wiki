(ns roam-wiki.views
  [:require [roam-wiki.roam :as rm]
   [goog.dom :as gdom]])

(def divider
  [:div.mb-2 {:style {:flex "0 0 0.5px" :background-color "rgb(57, 75, 89)" :margin-left "20px" :margin-right "20px"}}])

(def todo-nodes (atom []))

(defn add-task-list-wrapper []
  (.insertBefore
   (rm/roam-main)
   (gdom/createDom "div" #js{:class "roam-wiki-task-list-wrapper rm-article-wrapper rm-spacing--small"
                             :style "flex: 0 0 auto; margin-top: 50px;"
                             :innerHTML "<h1>My tasks</h1>"})
   (rm/roam-body-main)))

(defn mount-todo-list! []
  ;;(rm/clear-body-main)
  (when-not (js/document.querySelector ".roam-wiki-task-list-wrapper")
    (let [wrapper (add-task-list-wrapper)
          todos (map first (rm/user-todos rm/current-user-page-name))]
      (->> todos
           (mapv #(gdom/createDom "div" #js{:id (:uid %)
                                            :class "py-2"
                                            :style "border-bottom: 1px solid rgba(55, 53, 47, 0.09);
                                                    "}))

           (mapv #(.appendChild wrapper %))
           (reset! todo-nodes)
           (mapv #(rm/mount-block! (.-id %) %)))
      (set! js/window.onhashchange
            (fn []
              (->> @todo-nodes
                   (mapv #(rm/unmount-node! %)))
              (.remove wrapper)
              (set! js/window.onhashchange nil))))))

(defn main []
  [:div.flex.flex-col
   [:div.flex.justify-end.items-center.text-sm.roam-wiki-editing-as {:style {:padding "0px 20px 5px 20px"}}
    [:div  "Editing as: "]
    [:div.flex
     [:a.roam-wiki-user-name.p-1.mx-1.rounded {:href (rm/get-page-url rm/current-user-page-uid)} rm/current-user-page-name]]]
   divider
   [:a.log-button {:href (rm/get-page-url "IUTjyZyiV")}
    [:span.bp3-icon.bp3-icon-lightbulb.icon.bp3-icon-small]
    "Dashboard"]
   [:a.log-button {:href rm/base-url}
    [:span.bp3-icon.bp3-icon-calendar.icon.bp3-icon-small]
    "Daily notes"]
   [:a.log-button {:on-click mount-todo-list!}
    [:span.bp3-icon.bp3-icon-tick-circle.icon.bp3-icon-small]
    "My tasks"]])
