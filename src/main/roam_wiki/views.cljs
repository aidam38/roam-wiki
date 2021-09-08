(ns roam-wiki.views
  [:require [roam-wiki.roam :as rm]
   [roam-plugin-tools.dom :as rptd]
   [roam-plugin-tools.state :as rpts]
   [roam-alpha-api.ui.components :as rc]
   [roam-alpha-api.data :as rd]
   [roam-alpha-api.data.page :as page]
   [roam-alpha-api.data.block :as block]
   [roam-alpha-api.util :as util]
   [goog.dom :as gdom]
   [clojure.string :as str]])

(def divider
  [:div.mb-2 {:style {:flex "0 0 0.5px" :background-color "rgb(57, 75, 89)" :margin-left "20px" :margin-right "20px"}}])

(def task-nodes (atom []))

(defn add-task-list-wrapper []
  (js/console.log rptd/roam-body-main)
  (.insertBefore
   rptd/roam-main
   (gdom/createDom "div" #js{:class "roam-wiki-task-list-wrapper rm-article-wrapper rm-spacing--small"}
                   :style "flex: 0 0 auto; margin-top: 50px;"
                   :innerHTML "<h1>My tasks</h1>")
   rptd/roam-body-main))

(defn mount-task-list! []
  ;;(rptd/body-main-clear!)
  (when-not (js/document.querySelector ".roam-wiki-task-list-wrapper")
    (let [wrapper (add-task-list-wrapper)
          tasks (map first (rm/user-tasks rm/current-user-page-name))]
      (->> tasks
           (mapv #(gdom/createDom "div" #js{:id (:uid %)
                                            :class "py-2"
                                            :style "border-bottom: 1px solid rgba(55, 53, 47, 0.09);
                                                    "}))

           (mapv #(.appendChild wrapper %))
           (reset! task-nodes)
           (mapv #(rc/render-block {:uid (.-id %) :el %})))
      (set! js/window.onhashchange
            (fn []
              (->> @task-nodes
                   (mapv #(rc/unmount-node %)))
              (.remove wrapper)
              (set! js/window.onhashchange nil))))))

(defn user []
  [:div.flex.justify-end.items-center.text-sm.roam-wiki-editing-as {:style {:padding "0px 20px 5px 20px"}}
   [:div  "Editing as: "]
   [:div.flex
    [:a.roam-wiki-user-name.p-1.mx-1.rounded {:href (rpts/get-page-url rm/current-user-page-uid)} rm/current-user-page-name]]])

(defn log-buttons []
  [:div
   [:a.log-button {:href (rpts/get-page-url "IUTjyZyiV")}
    [:span.bp3-icon.bp3-icon-lightbulb.icon.bp3-icon-small]
    "Dashboard"]
   [:a.log-button {:href (rpts/base-url)}
    [:span.bp3-icon.bp3-icon-calendar.icon.bp3-icon-small]
    "Daily notes"]])
  ;;  [:a.log-button {:on-click mount-task-list!}
  ;;   [:span.bp3-icon.bp3-icon-tick-circle.icon.bp3-icon-small]
  ;;   "My tasks"]])

(defn find-schema [table]
  (->> table
       (rd/q '[:find (pull ?e [{:block/children [:block/string]}])
               :in $ ?t
               :where [?tp :node/title ?t]
               [?tp :block/children ?e]
               [?e :block/refs ?s]
               [?s :node/title "schema"]])
       (first)
       (first)
       (:children)
       (map :string)
       (map #(str/replace % "::" ""))))

(defn create-key-val! [uidb key]
  (let [uid (util/generate-uid)]
    (block/create {:location {:parent-uid uidb :order 0}
                   :block {:uid uid :string (str key "::")}})
    (block/create {:location {:parent-uid uid :order 0}
                   :block {:string ""}})))

(defn add-to-table! [table]
  (let [uidp (util/generate-uid)
        uidb (util/generate-uid)]
    (page/create {:page {:uid uidp :title uidp}})
    (block/create {:location {:parent-uid uidp :order 0}
                   :block {:uid uidb :string (str "#" table)}})
    (mapv #(create-key-val! uidb %) (reverse (find-schema table)))
    (rpts/go-to-uid! uidp)))

(defn table [text name]
  [:a.log-button.flex.justify-between {:on-click #(rpts/go-to-page! name)}
   text
   [:span.bp3-icon.bp3-icon-plus.icon.bp3-icon-small.roam-wiki-plus {:on-click #(do (add-to-table! name) (.preventDefault %) (.stopPropagation %))}]])

(defn tables []
  [:div
   [table "Articles" "article"]])

(defn main []
  [:div.flex.flex-col
   [user]
   divider
   [log-buttons]])
