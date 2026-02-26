const User = require('../model/modelUsers');
const mongoose = require('mongoose');

/**
 * Récupère les données d'un utilisateur en fonction des paramètres.
 * Les paramètres sont ceux de la méthode find() de Mongoose.
 * @param {Object} find_param : Les paramètres de la méthode find().
 * @throws {Error} : Une erreur est levée si la récupération des données a échoué.
 */
async function getData(find_param = {}) {
    try {
        return await User.find(find_param).exec();
    } catch (error) {
        console.error("Erreur lors de la récupération :", error);
    }
}


/**
 * Crée un utilisateur.
 * @param {string} email : L'adresse email de l'utilisateur.
 * @param {string} mdp : Le mot de passe de l'utilisateur.
 * @param {string} re_mdp : La confirmation du mot de passe.
 * @returns {number} : 0 si l'utilisateur a été créé avec succès, 1 si une erreur est survenue, 2 si l'adresse email est déjà prise, 3 si les mots de passe ne sont pas identiques, 4 si les paramètres sont vides.
 */
async function createUser(email, mdp, re_mdp) {
    if (email !== undefined && mdp !== undefined && re_mdp !== undefined && email !== "" && mdp !== "" && re_mdp !== "") {
        if (mdp === re_mdp) {
            var email_search = await getData({email: email});
            if (email_search.length === 0) {
                try {
                    var new_user = new User({email: email, mdp: mdp});
                    await new_user.save();
                    return 0;
                } catch(err) {
                    return 1;
                }
            } else {
                return 2;
            }
        } else {
            return 3;
        }
    } else {
        return 4;
    }
}

/**
 * Fonction qui permet de vérifier si un utilisateur existe
 * et si le mot de passe est correct.
 *
 * @param {string} email : L'email de l'utilisateur
 * @param {string} mdp : Le mot de passe de l'utilisateur
 *
 * @returns {number} : 0 si l'utilisateur existe et que le mot de passe est correct, 1 si le mot de passe est incorrect, 2 si l'utilisateur n'existe pas, 3 si les paramètres sont vides
 */
async function authUser(email, mdp) {
    if (email !== undefined && mdp !== undefined && email !== "" && mdp !== "") {
        var email_search = await getData({email: email});
        if (email_search.length !== 0) {
            if (email_search[0].mdp === mdp) {
                return 0;
            } else {
                return 1;
            }
        } else {
            return 2;
        }
    } else {
        return 3;
    }
}

exports.getData = getData;
exports.createUser = createUser;
exports.authUser = authUser;