(ns roam-wiki.roam
  [:require
   [clojure.string :as str]
   [goog.dom :as gdom]])

(def url js/window.location.href)

(js/console.log url)

;; (def url "https://roamresearch.com/#/app/notemap/page/07-26-2021")

(def graph-name
  (let [tail (->> url
                  (re-find #"(#/app/)(.+)")
                  (last))]
    (if (clojure.string/includes? tail "/")
      (last (re-find #"^(.*?)/" tail))
      tail)))

(def base-url
  (let [head (->> url
                  (re-find #"(.*)#")
                  (last))]
    (str head "#/app/" graph-name)))

(def base-page-url
  (str base-url "/page/"))

(def current-user-email
  (-> "globalAppState"
      (js/localStorage.getItem)
      (js/JSON.parse)
      (nth 6)
      (nth 2)))

(def api js/roamAlphaAPI)

(defn query [q & o]
  (let [args (cons (str/replace (pr-str q) #"\n" " ") o)]
    (apply (.. api -data -q) args)))

(def current-user-page
  (-> (query '[:find (pull ?p [*])
               :in $ email
               :where
               [?p :block/children ?b]
               [?b :block/refs ?ep]
               [?ep :node/title "email"]
               [?b :block/string ?bs]
               [(clojure.string/includes? ?bs email)]] current-user-email)
      (first)
      (first)
      (js->clj :keywordize-keys true)))

(def current-user-page-uid
  (:uid current-user-page))

(def current-user-page-name
  (:title current-user-page))

(defn get-page-url [uid]
  (str base-page-url uid))

(def left-sidebar (js/document.querySelector ".roam-sidebar-content"))

(def left-sidebar-top-row (js/document.querySelector ".top-row"))

(def custom-sidebar-wrapper (gdom/createDom "div" #js{:id "roam-wiki-sidebar"}))

(defn insert-custom-sidebar-wrapper! []
  (. left-sidebar insertBefore custom-sidebar-wrapper (. left-sidebar-top-row -nextSibling)))

(defn clear-left-sidebar! []
  (mapv gdom/removeNode (js/document.querySelectorAll ".log-button")))