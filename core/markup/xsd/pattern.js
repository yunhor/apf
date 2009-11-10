/*
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 *
 */

//#ifdef __PARSER_XSD || __WITH_XFORMS || __WITH_MODEL_VALIDATION
/**
 * Defines the exact sequence of characters that are acceptable
 */
apf.XsdPattern = function(struct, tagName){
    this.$init(tagName || "pattern", apf.NODE_HIDDEN, struct);
};

(function(){
    this.$propHandlers["value"] = function(){
        this.parentNode.$recompile();
    };
    
    this.$compile = function(stack){
        stack.push("if (!/^" + this.value
            .replace(/(\/|\^|\$)/g, "\\$1") + "$/.test(value)) return false;")
    };
}).call(apf.XsdPattern.prototype = new apf.XsdElement());

apf.xsd.setElement("pattern", apf.XsdPattern);
//#endif