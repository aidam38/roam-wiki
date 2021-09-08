(ns roam-wiki.roam
  [:require
   [roam-plugin-tools.state :as rpt]
   [roam-alpha-api.data :as rd]
   [goog.dom :as gdom]])

(defn find-records-where-keyval [table key val]
  (-> (rd/q '[:find (pull ?record [:block/uid :node/title])
              :in $ ?table ?key ?val
              :where [?record :block/children ?table-block]
              [?table-block :block/refs ?table-page]
              [?table-page :node/title ?table]
              [?table-block :block/children ?key-block]
              [?key-block :block/refs ?key-page]
              [?key-page :node/title ?key]
              [?key-block :block/children ?val-block]
              [?val-block :block/string ?val-string]
              [(clojure.string/includes? ?val-string ?val)]]
            table key val)
      (first)
      (first)))

(def current-user-page
  (find-records-where-keyval "Person" "Email" (rpt/current-user-email)))

(def current-user-page-uid
  (:uid current-user-page))

(def current-user-page-name
  (:title current-user-page))

(defn user-tasks [name]
  (rd/q '[:find (pull ?task [*])
          :in $ ?person-name
          :where [?task :block/refs ?person-page]
          [?task :block/refs ?todo-page]
          [?todo-page :node/title "TODO"]
          [?task :block/refs ?task-page]
          [?task-page :node/title "Task"]
          [?person-page :node/title ?person-name]] name))
