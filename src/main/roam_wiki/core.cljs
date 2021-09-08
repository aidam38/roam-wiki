(ns roam-wiki.core
  (:require
   [roam-plugin-tools.dom :as rptd]
   [reagent.dom :as rd]
   [roam-wiki.views :refer [main]]))

(defn init []
  (rptd/sidebar-remove! [:log-buttons :logo])
  (let [csc (rptd/insert-custom-sidebar-container-before! :shortcuts)]
    (rd/render [main] csc)))

